import React from "react";
import BoxTex from "../../Helper/BoxTex";
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";

const Service = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <BoxTex>Our Services</BoxTex>
        {/* Heading */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Our Services Made For You
        </h1>
        <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:e-[60%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          mollitia aliquam, blanditiis numquam tempore nihil cupiditate commodi
          rem odit? Natus.
        </p>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
          {/* 1st Service */}
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaRocket className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Start Up</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 2nd Service */}
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaBriefcase className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Bussiness</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 3rd Service */}
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaShoppingCart className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">E-commerce</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 4th Service */}
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <MdOutlineDesignServices className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Digital Design</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 5st Service */}
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <IoColorPaletteOutline className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Unlimited Colors</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 6st Service */}
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaChess className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Strategy Solutions</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
