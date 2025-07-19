import { Schema, Document, models, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String,required: true }, // Optional if you support social login
});

export const User = models.User || model<IUser>('User', UserSchema);
