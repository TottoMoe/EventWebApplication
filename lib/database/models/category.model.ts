import { Schema, Document, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const CatergrorySchema = new Schema({ 
  name: { type: String, required: true, unique: true},
})

const Category = models.Category || model('Category', CatergrorySchema);

export default Category;