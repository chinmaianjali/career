import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not defined

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
