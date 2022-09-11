import React from "react";
import { ClipLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className=" text-red-500 bg-slate-200 flex items-center justify-center h-screen">
      <ClipLoader color="#fffff" size={75} />
    </div>
  );
};
