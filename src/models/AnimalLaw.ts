import { Schema, model, models, Document } from 'mongoose';

export interface IAnimalLaw extends Document {
  title: string;
  date: string;
  slug: string;
  content: string;
}

const AnimalLawSchema = new Schema<IAnimalLaw>(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true, // Optional: Adds createdAt and updatedAt fields
  }
);

// Ensure consistent model creation and avoid overwrite issues
const AnimalLaw =
  models['Legal-Provisions'] || model<IAnimalLaw>('Legal-Provisions', AnimalLawSchema);

export default AnimalLaw;
