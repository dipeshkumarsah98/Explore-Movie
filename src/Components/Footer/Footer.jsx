import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="bg-white py-5">
      <div className="container flex flex-col items-center lg:flex-row justify-between">
        <span className="text-gray-500 flex text-sm lg:text-base items-center ">
          <AiOutlineCopyrightCircle className="mr-1" />
          Dipesh Kumar Sah. All Rights Reserved.
        </span>
        <ul className="flex gap-4 text-sm md:text-lg text-gray-500">
          <li className="cursor-pointer transition-colors hover:underline hover:underline-offset-1 hover:text-gray-600">
            About
          </li>
          <li className="cursor-pointer transition-colors hover:underline hover:underline-offset-1 hover:text-gray-600">
            Privacy Policy
          </li>
          <li className="cursor-pointer transition-colors hover:underline hover:underline-offset-1 hover:text-gray-600">
            Licensing
          </li>
          <li className="cursor-pointer transition-colors hover:underline hover:underline-offset-1 hover:text-gray-600">
            Contact
          </li>
        </ul>
      </div>
    </footer>
  );
};
