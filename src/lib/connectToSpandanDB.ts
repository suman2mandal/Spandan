// lib/userDB.ts
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI || '';

if (!MONGO_URI) throw new Error('MONGODB_URI not defined');

let isConnected = false;

export const connectToSpandanDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: 'Spandan', // ✅ specific DB name for users
      bufferCommands: false,
    });

    isConnected = true;
    console.log('✅ Connected to User DB');
  } catch (err) {
    console.error('❌ User DB connection failed:', err);
    throw err;
  }
};
