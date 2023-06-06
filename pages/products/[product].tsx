import Navbar from "@/components/navbar";
import { ProductData } from "@/fetch";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  background-color: var(--background);
  color: var(--text);
  min-height: 100vh;
`;

const Product = () => {
  const router = useRouter();
  const {
    query: { product },
  } = router;
  const [data, setData] = useState<ProductData>();
  useEffect(() => {
    const getData = async () => {
      if (product) {
        await axios.get("/api/productdata?id=" + product).then((response) => {
          setData(response.data);
        });
      }
    };
    getData();
  }, [product]);

  const offer = Math.ceil(data?.price / 2300);
  const oldPrice = data?.price + Math.ceil(data?.price * (offer / 100));

  return (
    <ProductContainer className="flex flex-col">
      <Navbar />
      <section className="p-4 lg:max-w-7xl w-full mx-auto flex flex-col gap-3">
        <p className="text-xl">{data?.title}</p>
        <Image
          src="/mac.png"
          className="w-96"
          alt="product"
          width={300}
          height={300}
        />
        <div className="flex items-center gap-4">
          <p className="w-12">Color</p>
          <p className="border p-1 bg-blue-100">Marow Green</p>
          <p className="border p-1">Rose Red</p>
          <p className="border p-1">Black</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="w-12">Variant</p>
          <p className="border p-1 bg-blue-50">128</p>
          <p className="border p-1">256</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-xl font-semibold">₹ {data?.price}</p>
          <p className=" text-base text-gray-600  line-through">₹ {oldPrice}</p>
          <p className="text-base text-green-700">{offer}%</p>
        </div>

        <div className="flex flex-col gap-3">
          <p>Offers Available </p>
          <p className="text-sm">
            No Cost Emi upto 6 months on selective Cards
          </p>
          <p className="text-sm">
            Get a free alexa on purchase any flagship mobile{" "}
            <span className="text-sky-700 font-semibold">T&C</span>
          </p>
          <p className="text-sm">
            Bank offer on HDFC Credit Card upto 30,000{" "}
            <span className="text-sky-700 font-semibold">T&C</span>
          </p>
        </div>

        <h3 className="border-2 w-fit rounded-md p-2 mt-5">Add to Cart</h3>
      </section>
    </ProductContainer>
  );
};

export default Product;
