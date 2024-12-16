import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className=" px-12 text-white flex items-center justify-between fixed w-full max-w-[1440px] mx-auto left-[50%] -translate-x-[50%]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-24 md:w-32" />
        <p className="text-xs -mt-6 md:-mt-6 md:text-sm">The Shoe Company</p>
      </Link>
      <div className="hidden  md:block space-x-6 font-bold lg:space-x-8 lg:text-2xl">
        <Link to="/">Home</Link>
        <Link to="/how">How It Works</Link>
        <Link to="/testimonial">Testimonials</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <button className="text-5xl md:hidden font-semibold">☰</button>
    </div>
  );
};

export default Header;
