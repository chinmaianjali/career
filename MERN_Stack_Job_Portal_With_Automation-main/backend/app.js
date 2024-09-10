import express from 'express';
import mongoose from 'mongoose';
import certificateRoutes from './routes/certificateRouter.js'; // Ensure this path is correct

const app = express();

app.use(express.json());
app.use('/api/certificates', certificateRoutes);

mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

export default app; // Ensure that this is the default export
