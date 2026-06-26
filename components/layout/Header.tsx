import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import MobileMenu from "./MobileNav";

function Header() {
  return (
    <div className="">
      <TopBar />
      <MobileMenu />
      <Navbar />
    </div>
  );
}

export default Header;
