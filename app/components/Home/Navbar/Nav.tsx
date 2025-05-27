"use client";

import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavbg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed w-full z-[100] transition-all duration-300 ${navbg ? "bg-white shadow-md" : "bg-white"
        }`}
    >
      <div className="flex items-center h-[12vh] justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-blue-600">Dev</span>
            <span className="text-black">Nusa</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-5 ml-auto mr-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-black hover:text-blue-600 font-semibold transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Right side: Button & Burger */}
        <div className="flex items-center space-x-6">
          <a
            href="https://wa.me/62895371927060?text=Halo%2C%20saya%20ingin%20konsultasi%20terkait%20layanan%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-5 py-2 font-medium bg-blue-600 text-white rounded-full hover:bg-white hover:text-blue-600 transition-all border-2 border-transparent hover:border-blue-600"
          >
            Konsultasi Gratis
          </a>
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
