// src/models/User.ts

import { Schema, model, models } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  image?: string;
  password?: string;
  provider?: 'google' | 'credentials';
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  password: { type: String }, // optional
  provider: { type: String }, // 'google' | 'credentials'
});

export const getUserModel = () =>
  models.User || model<IUser>('User', UserSchema);
