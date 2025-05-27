import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1B70E7] py-4">
      <div className="text-center text-white text-sm flex justify-center items-center gap-1">
        <FaRegCopyright />
        <span className="font-semibold">2025 DevNusa. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
