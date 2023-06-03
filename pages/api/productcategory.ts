import mongooseConnect from "@/lib/mongoose";
import { Category } from "@/models/category";
import { getServerSession } from "next-auth";
import { ValidOwner, authOptions } from "./auth/[...nextauth]";

export default async function handleCategory(req, res) {
  const { method } = req;
  const { _id, category, parentcategory, productFeature } = req.body;
  await mongooseConnect();
  await ValidOwner(req, res);
  console.log(category);
  if (method === "GET") {
    res.json(await Category.find().populate("parentcategory"));
  }
  if (method === "POST") {
    const response = await Category.create({
      category,
      parentcategory,
      features: productFeature,
    });
    res.json(response);
  }
  if (method === "PUT") {
    const response = await Category.updateOne(
      { _id },
      {
        category,
        parentcategory,
        features: productFeature.map((e) => ({
          name: e.name,
          value: e.value.split(","),
        })),
      }
    );
    res.json(response);
  }
  if (method === "DELETE") {
    if (req.query?.id) {
      res.json(await Category.deleteOne({ _id: req.query.id }));
    }
  }
}
