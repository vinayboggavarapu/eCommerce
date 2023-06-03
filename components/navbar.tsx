import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex  max-w-7xl mx-auto w-full justify-between">
        <h2>Buy IT</h2>
        <nav className="flex w-full justify-evenly">
          <Link href="/">Home</Link>
          <Link href="/category">Category</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
