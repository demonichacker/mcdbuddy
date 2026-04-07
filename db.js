const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri || uri.includes('<username>')) {
    console.error('❌ MONGODB_URI not found or not configured in .env!');
    console.error('Please get your connection string from MongoDB Atlas and update your .env file.');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB Connected Successfully');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
