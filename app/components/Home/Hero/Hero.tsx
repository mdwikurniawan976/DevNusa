import Image from "next/image";
import React from "react";


const Hero = () => {
  return (
    <div id="home" className="relative w-full h-[110vh] sm:h-screen  bg-cover bg-center flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">

        {/* Left Column (Image on mobile + Text) */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-6">
          {/* Mobile Image */}
          <div className="block xl:hidden">
            <Image
              src="/images/5396346.jpg"
              alt="image"
              width={500}
              height={500}
              className="mx-auto block"
            />
          </div>

          {/* Text */}
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950 mb-2">
            Build Smart. Grow Fast.
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-[2.5rem] md:leading-[3.5rem] mb-3">
            Butuh Web atau Aplikasi? <br /> Biar Kami yang Urus
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-black mt-0">
            Dari website hingga aplikasi Android dan dekstop, <br /> kami siap bantu kamu wujudkan semuanya.
          </p>


          {/* Ratings */}
          {/* <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/google.png"
                alt="google"
                width={40}
                height={40}
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                    4.5
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="w-4 h-4 text-yellow-500" />
                    <FaStar className="w-4 h-4 text-yellow-500" />
                    <FaStar className="w-4 h-4 text-yellow-500" />
                    <FaStar className="w-4 h-4 text-yellow-500" />
                    <BsStarHalf className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* CTA Button */}
          <div className="mt-4 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/62895371927060?text=Halo%2C%20saya%20ingin%20konsultasi%20terkait%20layanan%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-5 py-2 font-medium bg-blue-600 text-white rounded-full hover:bg-white hover:text-blue-600 transition-all border-2 border-transparent hover:border-blue-600"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* Right Column: Large Image on Desktop */}
        <div className="mx-auto hidden xl:block">
          <Image
            src="/images/5396346.jpg"
            alt="image"
            width={900}
            height={900}
            className="mx-auto block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;



