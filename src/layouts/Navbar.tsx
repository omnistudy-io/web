import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoVector.svg";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="container flex items-center justify-between mx-auto py-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="" className="w-8 h-8" />
          <h2 className="text-[#00adb5] ml-2 text-2xl font-['Reem_Kufi_Fun']">
            OmniStudy
          </h2>
        </a>
        <ul className="flex gap-8 items-center">
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <motion.a
            href="https://app.omnistudy.io/login"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-6 rounded-md bg-[#00adb5] text-white shadow-lg flex flex-row items-center gap-x-1"
          >
            Login
          </motion.a>
        </ul>
      </div>
    </nav>
  );
}
