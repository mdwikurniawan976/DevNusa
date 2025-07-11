'use client';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full h-[110vh] sm:h-screen bg-cover bg-center flex justify-center flex-col"
    >
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">

        {/* Left Column (Text + Mobile Image) */}
        <motion.div
          className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile Image */}
          <div className="block xl:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/5396346.jpg"
                alt="image"
                width={500}
                height={500}
                className="mx-auto block"
              />
            </motion.div>
          </div>

          {/* Text */}
          <motion.p
            className="text-sm sm:text-base md:text-xl font-bold text-blue-950 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Build Smart. Grow Fast.
          </motion.p>

          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-[2.5rem] md:leading-[3.5rem] mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Butuh Web atau Aplikasi? <br /> Biar Kami yang Urus
          </motion.h1>

          <motion.p
            className="text-xs sm:text-sm md:text-base font-medium text-black mt-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Dari website hingga aplikasi Android dan desktop, <br /> kami siap bantu kamu wujudkan semuanya.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-4 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="https://wa.me/62895371927060?text=Halo%2C%20saya%20ingin%20konsultasi%20terkait%20layanan%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-5 py-2 font-medium bg-blue-600 text-white rounded-full hover:bg-white hover:text-blue-600 transition-all border-2 border-transparent hover:border-blue-600"
            >
              Konsultasi Gratis
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Desktop Image */}
        <motion.div
          className="mx-auto hidden xl:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/5396346.jpg"
            alt="image"
            width={900}
            height={900}
            className="mx-auto block"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
