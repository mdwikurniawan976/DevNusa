'use client';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaHandshake,
  FaClock,
  FaComments,
  FaFileAlt,
  FaWrench,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="pt-1 pb-2 bg-white">
      <div className="w-[85%] xl:w-[80%] mx-auto space-y-10">

        {/* Bagian Tentang Kami */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-8 text-left">Tentang Kami</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
            {/* Gambar kiri */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-left"
            >
              <Image
                src="/images/about.jpg"
                alt="Ilustrasi Tentang Kami"
                width={600}
                height={600}
                className="object-contain"
              />
            </motion.div>

            {/* Teks kanan */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm sm:text-base text-black mb-3">
                DevNusa adalah penyedia layanan pengembangan perangkat lunak yang berfokus pada solusi digital modern untuk bisnis, UMKM, dan individu di seluruh Indonesia.
              </p>
              <p className="text-sm sm:text-base text-black mb-3">
                Kami mengkhususkan diri dalam pembuatan:
              </p>
              <ul className="text-sm sm:text-base text-black space-y-2 mb-4 ml-1">
                <li className="flex items-start"><FaLaptopCode className="text-blue-600 mr-2 mt-1" /> Website dinamis & responsif</li>
                <li className="flex items-start"><FaMobileAlt className="text-blue-600 mr-2 mt-1" /> Aplikasi mobile Android dengan Kotlin</li>
                <li className="flex items-start"><FaDesktop className="text-blue-600 mr-2 mt-1" /> Aplikasi desktop berbasis C# & .NET</li>
              </ul>
              <p className="text-sm sm:text-base text-black">
                Dengan pengalaman di berbagai proyek dan kompetisi, kami percaya bahwa teknologi <br /> harus menjadi alat yang mudah, terjangkau, dan tepat guna untuk membantu klien kami berkembang.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bagian Kenapa Memilih DevNusa */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
            {/* List Alasan */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">✨ Kenapa Memilih DevNusa?</h2>
              <ul className="text-sm sm:text-base text-gray-800 space-y-3 ml-1">
                <li className="flex items-start"><FaHandshake className="text-blue-500 mr-3 mt-1" /> Dikerjakan langsung oleh developer berpengalaman</li>
                <li className="flex items-start"><FaClock className="text-blue-500 mr-3 mt-1" /> Tepat waktu & komunikasi transparan</li>
                <li className="flex items-start"><FaComments className="text-blue-500 mr-3 mt-1" /> Konsultasi gratis & harga fleksibel</li>
                <li className="flex items-start"><FaFileAlt className="text-blue-500 mr-3 mt-1" /> Dokumentasi & dukungan pasca-proyek</li>
                <li className="flex items-start"><FaWrench className="text-blue-500 mr-3 mt-1" /> Bisa custom sesuai kebutuhan spesifik Anda</li>
              </ul>
            </motion.div>

            {/* Gambar Pria Ekspresif */}
            <motion.div
              className="flex justify-left items-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/why.png"
                alt="Kenapa DevNusa"
                width={650}
                height={650}
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
