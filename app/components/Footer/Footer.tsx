import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { navLinks } from "@/app/constant/constant";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white px-6 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand / Deskripsi */}
        <div>
          <h2 className="text-xl font-bold mb-3">DevNusa</h2>
          <p className="text-sm leading-relaxed">
            Menyediakan solusi digital kreatif untuk bisnis, startup, dan UMKM Indonesia. Kami membangun masa depan dengan teknologi.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h2 className="text-xl font-bold mb-3">Navigasi</h2>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h2 className="text-xl font-bold mb-3">Kontak</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-base" />
              <span>Pasuruan, Jawa Timur, Indonesia</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-base" />
              <span>+62 895-3719-27060</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-base" />
              <span>nusadev526@mail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
        <span className="flex justify-center items-center gap-1">
          <FaRegCopyright />
          2025 DevNusa. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
