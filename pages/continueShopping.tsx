import { useRouter } from "next/router";
import React from "react";

const ContinueShopping = () => {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-7xl w-full">
        <h3 className="font-bold text-2xl">Continue Shopping</h3>
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          back to shopping
        </button>
      </div>
    </div>
  );
};

export default ContinueShopping;
