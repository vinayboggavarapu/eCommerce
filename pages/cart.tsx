import Navbar from "@/components/navbar";
import StateContext from "@/context/states";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ProductData } from "@/fetch";
import Image from "next/image";

const Cart = () => {
  const { cartItems } = useContext(StateContext);
  const [fetchCartItems, setfetchCartItems] = useState([]);
  console.log(cartItems);

  useEffect(() => {
    async function fetch() {
      await axios
        .post("/api/cart", cartItems)
        .then((response) => setfetchCartItems(response.data));
    }
    fetch();
    console.log(fetchCartItems);
  }, []);
  return (
    <div>
      <Navbar />

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-3 min-h-screen h-screen p-5 mx-auto">
          <div className="col-span-2">
            {fetchCartItems.map((product: ProductData) => {
              return (
                <div key={product._id}>
                  <p>{product.title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col  border p-5 gap-5">
            <h3 className="text-2xl font-semibold ">Add information</h3>
            <input
              placeholder="Enter Address"
              className="border border-black w-56 rounded-md pl-2"
            />
            <button className="w-56 bg-gray-200 p-2 rounded-md">
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl">No items in the cart</h3>
          <p>Add items to cart</p>
          <Image
            src="/addCart.gif"
            className="w-96"
            alt="product"
            width={300}
            height={300}
          />
          <p>Continue Shopping</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
