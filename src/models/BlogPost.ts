import mongoose, { Schema, Document } from 'mongoose';

export interface BlogPost extends Document {
  slug: string;
  content: string;
  createdAt: Date;
}

const BlogPostSchema = new Schema<BlogPost>({
  slug: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.BlogPost || mongoose.model<BlogPost>('BlogPost', BlogPostSchema);
