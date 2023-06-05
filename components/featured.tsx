import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Products = styled.div`
  background-color: var(--navbg);
`;

const Featured = () => {
  return (
    <Products className="min-h-[30vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto h-full items-center justify-items-center  ">
        <div
          className="h-fit justify-self-center
         flex flex-col gap-4"
        >
          <h2 className="text-3xl font-semibold">New Products at great deal</h2>
          <div className="text-xl">
            <p>Macbook Pro with All new M2 chip</p>
            <p>Starting at Rs 1,XX,999</p>
          </div>
          <div className="flex gap-2">
            <Button text="l">More</Button>
            <div>
              <Button text="l">
                <ShoppingCartIcon />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
        <Image
          src="/mac.png"
          className="w-96"
          alt="product"
          width={300}
          height={300}
        />
      </div>
    </Products>
  );
};

export default Featured;
