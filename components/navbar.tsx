import Link from "next/link";
import React, { useState, useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styled from "styled-components";
import StateContext from "@/context/states";

const Navbar = () => {
  const { cartItems } = useContext(StateContext);
  const NavContainer = styled.div`
    background-color: var(--navbg);
  `;
  const [dark, setDark] = useState(false);
  const switchTheme = () => {
    const currentTheme = document.body.classList;

    document.body.classList.toggle("darkTheme");
    setDark(!dark);
  };
  return (
    <NavContainer className="w-full">
      <div
        className="flex p-5  max-w-7xl mx-auto w-full justify-around
      "
      >
        <Link
          href="/"
          className="w-fit flex items-center text-xl font-semibold"
        >
          Buy IT
        </Link>
        <input
          className="rounded-md pl-2 placeholder:text-sm"
          placeholder="Search for product or brand"
        />
        <nav className=" hidden md:flex gap-8 justify-around items-center">
          <Link href="/">Home</Link>
          <Link href="/category">Category</Link>
          <Link href="/products">Products</Link>
        </nav>
        <div className="flex gap-8 items-center justify-center">
          <button
            onClick={() => {
              switchTheme();
            }}
          >
            {dark ? (
              <LightModeIcon className="text-4xl rounded-full" />
            ) : (
              <DarkModeIcon className="text-4xl " />
            )}
          </button>
          <Link href="/category" className=" hidden md:flex ">
            Account
          </Link>
          <Link href="/cart" className="hidden md:flex">
            Cart {cartItems.length}
          </Link>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;
