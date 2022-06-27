import mongoose from 'mongoose';

import { DB_URI } from './env';

const setupDb = async (): Promise<void> => {
  await mongoose.connect(DB_URI, { retryWrites: true, w: 'majority' });
  console.log('Connected to MongoDB');
};

export default setupDb;
