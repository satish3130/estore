import React from "react";

const Discount = ({ product, slug }) => {
  // console.log(slug);
  return (
    <>
      {product.savedpercentage !== 0 && (
        <span
          className={
            slug
              ? "text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4"
              : " absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4"
          }
        >
          {product.savedpercentage}% Off
        </span>
      )}
    </>
  );
};

export default Discount;
