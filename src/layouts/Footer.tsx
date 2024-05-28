import { Link } from "react-router-dom";
import logo from "../assets/logoVector.svg";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#d9d9d9] rounded-t-3xl pt-16 pb-4"
      style={{ boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="container flex flex-col gap-8">
        <div className="flex justify-between">
          <a href="/" className="flex items-center h-16">
            <img src={logo} alt="" className="w-12 h-12" />
            <h2 className="text-[#00adb5] ml-2 text-3xl font-['Reem_Kufi_Fun']">
              OmniStudy
            </h2>
          </a>
          <div className="grid grid-cols-3 gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold">Useful Links</h3>
              <div className="flex flex-col gap-2">
                <Link to="/features">Features</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/about">About</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold">Contact</h3>
              <div className="flex flex-col gap-2">
                <Link to="/contact">Contact</Link>
                <Link to="/">Email</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold">Policies</h3>
              <div className="flex flex-col gap-2">
                <Link to="/terms">Terms</Link>
                <Link to="/privacy">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-4">
          <p className="text-sm">
            &copy; 2021 OmniStudy | All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <Link to="/">
              <Instagram
                size={20}
                className="hover:text-[#00adb5] transition-all duration-300 ease-in-out"
              />
            </Link>
            <Link to="/">
              <Twitter className="hover:text-[#00adb5] transition-all duration-300 ease-in-out" />
            </Link>
            <Link to="/">
              <Facebook
                size={20}
                className="hover:text-[#00adb5] transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
