import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { navLinks } from "@/app/constant/constant";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1B70E7] to-[#144FC9] text-white px-4 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-6">
        
        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.url} 
                className="hover:text-blue-200 transition duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div className="text-center text-sm flex flex-col md:flex-row items-center gap-2">
          <div className="flex items-center gap-1">
            <FaRegCopyright />
            <span className="font-medium">2025 DevNusa. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="hidden md:inline">|</span>
            <span>Built with</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span>by <span className="font-semibold hover:underline cursor-pointer">DevNusa Team</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
