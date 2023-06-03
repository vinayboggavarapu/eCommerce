import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/product";
import { ValidOwner } from "./auth/[...nextauth]";
export default async function handleSubmit(req: any, res: any) {
  const { method } = req;
  const { title, description, price, _id, category } = req.body;
  await mongooseConnect();
  await ValidOwner(req, res);
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }
  if (method === "POST") {
    const productDoc = await Product.create({
      title,
      description,
      price,
      category,
    });
    res.json(productDoc);
  }
  if (method == "PUT") {
    await Product.updateOne({ _id }, { title, description, price, category });
    res.json(true);
  }
  if (method == "DELETE") {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query.id });
      res.json(true);
    }
  }
}
