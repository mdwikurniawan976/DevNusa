'use client';
import React from "react";
import { motion } from "framer-motion";
import { BsInstagram, BsTiktok } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="w-[85%] xl:w-[80%] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Info Kontak */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
          <p className="text-gray-700 mb-4">
            Kami siap membantu Anda mewujudkan solusi digital yang sesuai dengan kebutuhan.
            Jangan ragu untuk menghubungi kami untuk konsultasi, penawaran harga, <br /> atau informasi lebih lanjut.
          </p>
          <p className="text-gray-900 mb-1">+62 895-3719-27060</p>
          <p className="text-gray-900 mb-6">devnusa@gmail.com</p>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/devnusa.id/" className="flex items-center gap-2 text-gray-900">
              <BsInstagram className="text-2xl text-blue-500" />
              <span className="font-medium">DevNusa</span>
            </a>
            <a href="https://www.tiktok.com/@devnusa.id?_t=ZS-8whEeI3mSLB&_r=1" className="flex items-center gap-2 text-gray-900">
              <BsTiktok className="text-2xl text-blue-600" />
              <span className="font-medium">DevNusa</span>
            </a>
          </div>
        </motion.div>

        {/* Form Kontak (Maps) */}
        <motion.div
          className="w-full h-[400px] rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.6877027213085!2d112.90155407496364!3d-7.159517870203353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7cbdd6a13c2cd%3A0x8e390c3ff58d0b1b!2sPasuruan%2C%20Kota%20Pasuruan%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1716814968366!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
