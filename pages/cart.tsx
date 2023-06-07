import Navbar from "@/components/navbar";
import StateContext from "@/context/states";
import axios from "axios";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ProductData } from "@/fetch";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import ContinueShopping from "./continueShopping";

const payment = (e: any) => {
  e.preventDefault();
  const appendScript = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    resolve(true);
  });
  appendScript.then(() => {
    var options = {
      key: process.env.NEXT_PUBLIC_RAZOR_ID, // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Buy IT", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      callback_url: "http://localhost:3000/cart?success=1",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#202020",
      },
    };
    let rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  });
};

const Cart = () => {
  const { cartItems } = useContext(StateContext);
  const [fetchCartItems, setfetchCartItems] = useState([]);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);

  console.log(cartItems);
  const router = useRouter();
  useLayoutEffect(() => {
    async function fetch() {
      await axios
        .post("/api/cart", cartItems)
        .then((response) => setfetchCartItems(response.data));
    }
    fetch();
    console.log(fetchCartItems);
    console.log(router);

    if (router.asPath.includes("success=1")) {
      setSuccess(true);
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>
      <Navbar />
      {success ? (
        <ContinueShopping />
      ) : (
        <div>
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
              <div className="flex flex-col justify-center h-2/4 border p-5 gap-5">
                <h3 className="text-3xl text-center font-semibold ">
                  Add information
                </h3>

                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="border border-black h-10 rounded-md pl-2"
                />
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="border border-black h-10  rounded-md pl-2"
                />
                <input
                  placeholder="Contact"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                  className="border border-black h-10 rounded-md pl-2"
                />
                <input
                  placeholder="Enter Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="border border-black h-10  rounded-md pl-2"
                />
                <button
                  className=" bg-gray-200 p-2 rounded-md"
                  onClick={(e) => payment(e)}
                >
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
      )}
    </div>
  );
};

export default Cart;
