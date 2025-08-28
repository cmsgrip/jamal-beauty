
import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: number;
  category: string;
  images: string[];
}

const ProductSchema: Schema = new Schema({
  name: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  description: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
