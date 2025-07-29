import mongoose from 'mongoose';

const VolunteerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: String,
    email: String,
    phone: String,
    areaOfInterest: String,
    location: String,
    availability: String,
    whyVolunteer: String,
    mediaUrl: String,
  },
  { timestamps: true }
);

export const Volunteer =
  mongoose.models.Volunteer || mongoose.model('Volunteer', VolunteerSchema);
