import React from 'react';
import logo from "../assets/APS_LOGO.png";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-2 px-4 flex items-center justify-between border">
      <img src={logo} alt="logo" className=" h-10" />
    </div>
  );
}

export default Navbar;
