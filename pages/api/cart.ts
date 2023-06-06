import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/product";

async function handleCartItemsFetch(req: any, res: any) {
  await mongooseConnect();

  const id = req.body;

  const data = await Product.find({ _id: id });
  res.json(data);
}

export default handleCartItemsFetch;
