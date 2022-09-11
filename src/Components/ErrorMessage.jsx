import React from "react";
import { BiError } from "react-icons/bi";

const ErrorMessage = ({ error }) => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <BiError className="text-red-500 text-xl md:text-3xl mr-1" />
      <h1 className="text-center md:ext-xl  text-red-500">Sorry !! {error}</h1>
    </div>
  );
};

export default ErrorMessage;
