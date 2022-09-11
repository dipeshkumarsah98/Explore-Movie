import React from "react";

const BoxOffice = ({ boxOffice }) => {
  return (
    <div className="font-kalam font-semibold space-y-2 md:text-lg lg:text-3xl">
      <p>
        Budget of the Movie:
        <strong className="italic text-gray-600 font-openSans">
          {boxOffice.budget}
        </strong>
      </p>
      <p>
        Opening weekend Collection USA:
        <strong className="italic text-gray-600 font-openSans">
          {boxOffice.openingWeekendUSA}
        </strong>
      </p>
      <p>
        Gross Collection in USA:
        <strong className="italic text-gray-600 font-openSans">
          {boxOffice.grossUSA}
        </strong>
      </p>
      <p>
        Cumulative World Wide Collection of the Movie:
        <strong className="italic text-gray-600 font-openSans">
          {boxOffice.cumulativeWorldwideGross}
        </strong>
      </p>
    </div>
  );
};

export default BoxOffice;
