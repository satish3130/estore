import React from "react";

const Discount = ({ product, card }) => {
  return (
    <div className="font-serif product-price font-bold">
      <select className="w-13 text-xs font-bold py-0.5 text-gray-800 ">
        {product &&
          product.quantities.map((item) => (
            <option className="font-sans">
              {item.quantity + item.unit_name}
            </option>
          ))}
      </select>

      {product &&
        product.quantities.map((item) => (
          <div className="font-serif product-price font-bold">
            {item.savedpercentage ? (
              <span
                className={
                  card
                    ? "inline-block text-sm font-semibold text-gray-800 ml-4 mt-1"
                    : "inline-block text-sm"
                }
              >
                {/* ₹{item.amount} */}
              </span>
            ) : (
              <span
                className={
                  card
                    ? "inline-block text-sm font-semibold text-gray-800"
                    : "inline-block text-2xl"
                }
              >
                {/* ₹{item.amount} */}
              </span>
            )}

            {item.savedpercentage ? (
              <del
                className={
                  card
                    ? "sm:text-sm font-normal text-xs text-gray-400 ml-1"
                    : "text-lg font-normal text-gray-400 ml-1"
                }
              >
                {/* ₹{item.amount} */}
              </del>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default Discount;
