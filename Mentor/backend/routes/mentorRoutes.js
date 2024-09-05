const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const Mentor = require('../models/Mentor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const fs = require('fs');
const app = express();
// Register a mentor
router.post('/register', async (req, res) => {
    const { fullName, email, phone, domain, experience, password, school, tenPlusTwo, degree, phd } = req.body;

    try {
        // Check if the mentor already exists
        let mentor = await Mentor.findOne({ email });

        if (mentor) {
            return res.status(400).json({ message: 'Mentor already exists' });
        }

        // Create a new mentor
        mentor = new Mentor({
            fullName,
            email,
            phone,
            domain,
            experience,
            password,
            school,
            tenPlusTwo,
            degree,
            phd
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        mentor.password = await bcrypt.hash(password, salt);

        // Save the mentor to the database
        await mentor.save();

        // Return JWT
        const payload = {
            user: {
                id: mentor.id,
                type: 'mentor'
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '5h' },
            (err, token) => {
                if (err) throw err;
                // Respond with success message and token
                res.status(201).json({
                    message: 'Mentor has been successfully registered',
                    token: token
                });
            }
        );
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let mentor = await Mentor.findOne({ email });

        if (!mentor) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, mentor.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: mentor.id,
                type: 'mentor'
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '5h' },
            (err, token) => {
                if (err) throw err;
                // Send token as response
                res.json({ token, message: 'Mentor logged in successfully' });
            }
        );
    } catch (error) {
        console.error('Error during mentor login:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Video upload route
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos'); // Directory where videos will be saved
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Append timestamp to avoid name conflicts
  },
});

const upload = multer({ storage });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Upload video
router.post('/upload-video', upload.single('video'), async (req, res) => {
  const token = req.headers['authorization']?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const mentorId = decoded.user.id;

    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }

    const { description, name, domain, experience, phd, mcqs } = req.body;
    const videoUrl = req.file?.path;

    if (!videoUrl) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    if (!name || !domain || !experience) {
      return res.status(400).json({ message: 'Name, domain, and experience are required' });
    }

    let mcqsArray = [];
    if (mcqs) {
      try {
        mcqsArray = JSON.parse(mcqs);
      } catch (error) {
        return res.status(400).json({ message: 'Invalid MCQs JSON format' });
      }
    }

    const existingVideo = mentor.videos.find(video => video.videoUrl === videoUrl);
    if (existingVideo) {
      return res.status(400).json({ message: 'Video already uploaded' });
    }

    mentor.videos.push({ videoUrl, description, name, domain, experience, phd, mcqs: mcqsArray });
    await mentor.save();

    res.json({ message: 'Video uploaded successfully', video: { videoUrl, description, name, domain, experience, phd, mcqs: mcqsArray } });
  } catch (error) {
    console.error('Error uploading video:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});




// Serve video files
// Route to get video details
router.get('/videos/:filename', (req, res) => {
    const filePath = path.join(__dirname, '../uploads/videos', req.params.filename);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ message: 'Video not found' });
        }
        
        res.setHeader('Content-Type', 'video/mp4');
        res.setHeader('Content-Disposition', 'inline');

        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    });
});
// Import necessary modules


// Route to verify quiz answers

module.exports = router;

// Fetch all videos
router.get('/videos', async (req, res) => {
    try {
        const mentors = await Mentor.find({}, 'videos');
        const videos = mentors.flatMap(mentor => mentor.videos);
        res.json({ videos });
    } catch (error) {
        console.error('Error fetching videos:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});



// Get mentor details
router.get('/mentor-details', async (req, res) => {
  const token = req.headers['authorization']?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const mentorId = decoded.user.id;

    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }

    const { fullName, email, phone, domain } = mentor;
    res.json({ fullName, email, phone, domain });
  } catch (error) {
    console.error('Error fetching mentor details:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;