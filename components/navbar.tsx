import Link from "next/link";
import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styled from "styled-components";

const Navbar = () => {
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
        <h2 className="w-fit flex items-center text-xl font-semibold">
          Buy IT
        </h2>
        <input
          className="rounded-md pl-2 placeholder:text-sm"
          placeholder="Search for product or brand"
        />
        <nav className="flex gap-8 justify-around items-center">
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
          <Link href="/category">Account</Link>
          <Link href="/products">Cart</Link>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;
