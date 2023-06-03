import mongoose, { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
  category: { type: String, required: true },
  parentcategory: { type: mongoose.Types.ObjectId, ref: "Category" },
  features: [{ type: Object }],
});

export const Category = models.Category || model("Category", categorySchema);
