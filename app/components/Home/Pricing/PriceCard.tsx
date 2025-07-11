import React from "react";

type Props = {
  time: string;
  price: string;
};

const PriceCard = ({ time, price }: Props) => {
  return (
    <div className="bg-white rounded-lg p-8 relative border-t-4 border-rose-300">
      <h1 className="text-sky-500 text-xl font-bold">{time} Membership</h1>
      <p className="mt-4 text-gray-600 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        quasi! Natus nostrum, officia amet maiores accusantium esse
        reprehenderit voluptatibus sed.
      </p>
      <div className="mt-8">
        <div className="text-gray-700 font-semibold">
          <span className="text-4xl font-bold text-black">${price}</span> /
          Month
        </div>
      </div>
      <div className="mt-12">
        <a
          href="#_"
          className=" rounded px-10 py-2.5 text-base text-center overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Upgrade Now</span>
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
