// src/models/AnimalLaw.ts

import { Schema, model, models } from 'mongoose';

export interface IAnimalLaw {
  title: string;
  date: string;
  slug: string;
  content: string;
}

const AnimalLawSchema = new Schema<IAnimalLaw>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
});

// 👇 Use the same key name as the model ('Legal-Provisions') here:
export const AnimalLaw =
  models['Legal-Provisions'] || model<IAnimalLaw>('Legal-Provisions', AnimalLawSchema);
