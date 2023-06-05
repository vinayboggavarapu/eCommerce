import Image from "next/image";
import React from "react";
import Button from "./button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface ProductData {
  _id: string;
  title: string;
  description: string;
  price: number;
  __v: any;
  category: string;
  updatedAt: any;
}

export const Product = ({ product }: any) => {
  const offer = Math.ceil(product.price / 2300);
  const oldPrice = product.price + Math.ceil(product.price * (offer / 100));
  return (
    <div key={product._id} className="p-2  flex flex-col items-center">
      <p>{product.title}</p>
      <Image
        src="/mac.png"
        className="w-96"
        alt="product"
        width={300}
        height={300}
      />
      <div className="flex items-center gap-3">
        <p className="text-xl font-semibold">₹ {product.price}</p>
        <p className=" text-base text-gray-600  line-through">₹ {oldPrice}</p>
        <p className="text-base text-green-700">{offer}%</p>
      </div>
      <div className="flex gap-2 mt-3 self-center cursor-pointer">
        {/* <ShoppingCartIcon /> */}
        Add to cart
      </div>
    </div>
  );
};
const LatestProducts = ({ products }: any) => {
  console.log(products);
  return (
    <div className="min-h-screen flex flex-col gap-12 ">
      <h3 className="text-2xl text-start max-w-7xl mx-auto w-full mt-6">
        Latest launches
      </h3>
      <div className="grid gap-5 grid-cols-4 max-w-7xl mx-auto w-full justify-items-center content-center">
        {products.map((product: ProductData) => {
          return (
            <div key={product._id}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestProducts;
