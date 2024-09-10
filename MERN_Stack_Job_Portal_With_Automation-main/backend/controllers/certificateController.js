import Certificate from '../models/Certificate.js';

export const uploadCertificate = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const certificate = new Certificate({
      filename: req.file.filename,
      path: req.file.path,
      originalName: req.file.originalname,
    });

    await certificate.save();

    res.status(200).json({ message: 'File uploaded successfully!', certificate });
  } catch (err) {
    res.status(500).json({ message: 'Error saving file information.', error: err.message });
  }
};
