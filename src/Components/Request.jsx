import React from "react";

const Request = () => {
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="my-10">
        <h2 className="text-red-400 italic text-center font-roboto text-xl">
          100/12
        </h2>
      </div>
    );
  }
  return null;
};

export default Request;
