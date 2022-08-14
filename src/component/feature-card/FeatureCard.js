import React from "react";
import { useSelector } from "react-redux";

const FeatureCard = () => {
  const details = useSelector((state) => state.allDetails.details);
  const {
    icon1,
    icon2,
    icon3,
    text1,
    text2,
    text3,
    description1,
    description2,
    description3,
  } = details;
  const data = [
    {
      icon: icon1,
      description: description1,
      text: text1,
    },
    {
      icon: icon2,
      description: description2,
      text: text2,
    },
    {
      icon: icon3,
      description: description3,
      text: text3,
    },
  ];

  return !icon1 ? (
    <></>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols- 1:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  max-w-screen-2xl px-4 sm:px-10  mx-auto">
      {data.map((promo, index) => (
        <div
          key={index}
          className=" border-r border-gray-200 py-5 flex items-center justify-center bg-white"
        >
          <div className="mr-3">
            <span
              className="flex-shrink-0 h-4 w-4 text-emerald-600"
              aria-hidden="true"
            >
              {promo.icon}
            </span>
          </div>
          <div className="">
            <span className="block font-serif text-[#f86700] font-medium leading-5">
              {promo.text}
            </span>
            <span className="block font-serif text-sm font-medium leading-5 py-1 pr-1 ">
              {promo.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
