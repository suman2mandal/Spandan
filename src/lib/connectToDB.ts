import mongoose from 'mongoose';

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const cached = {
  conn: null as mongoose.Connection | null,
  promise: null as Promise<typeof mongoose> | null,
  dbName: '',
};

export const connectToDB = async (dbName: string) => {
  if (cached.conn && cached.dbName === dbName) return cached.conn;

  if (!cached.promise || cached.dbName !== dbName) {
    cached.dbName = dbName;
    cached.promise = mongoose.connect(mongoUri, {
      dbName,
    }).then((mongooseInstance) => {
      console.log(`✅ Connected to MongoDB: ${dbName}`);
      return mongooseInstance;
    }).catch((error) => {
      console.error('❌ MongoDB connection error:', error);
      throw new Error('Failed to connect to MongoDB');
    });
  }

  const mongooseInstance = await cached.promise;
  cached.conn = mongooseInstance.connection;
  return cached.conn;
};
