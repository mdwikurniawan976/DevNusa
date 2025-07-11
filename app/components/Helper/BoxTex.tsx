import React from "react";

type Props ={
  children:React.ReactNode;
}
const BoxTex = ({children}:Props) => {
  return (
    <h1 className="text-sm sm:text-base font-medium text-blue-600 bg-blue-100 px-4 py-1 rounded-md w-fit">
      {children}
    </h1>
  );
};

export default BoxTex;
