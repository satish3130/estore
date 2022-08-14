import dynamic from "next/dynamic";
import React, { useContext, useState, useEffect } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from "react-use-cart";
import { useDispatch, useSelector } from "react-redux";

//internal import
import { SidebarContext } from "@context/SidebarContext";
import { Getcart } from "@services/CartServices";
import { getcart } from "src/storage/redux/actions/detailActions";

const StickyCart = () => {
  const [items, setItems] = useState("");
  const { totalItems, cartTotal } = useCart();
  const { toggleCartDrawer } = useContext(SidebarContext);
  const dispatch = useDispatch();
  const cartdetails = useSelector((state) => state.getcart.cartdetails);
  useEffect(async () => {
    await Getcart().then((res) => {
      dispatch(getcart(res.data));
    });
  }, []);

  console.log(cartdetails);
  return (
    <button aria-label="Cart" onClick={toggleCartDrawer} className="absolute">
      <div className="right-0 w-35 float-right fixed top-2/4 bottom-2/4 align-middle shadow-lg cursor-pointer z-30 hidden lg:block xl:block">
        <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-tl-lg p-2 text-gray-700">
          <span className="text-2xl mb-1 text-emerald-600">
            <IoBagHandleOutline />
          </span>
          <span className="px-2 text-sm font-serif font-medium">
            {totalItems}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg-emerald-700 p-2 text-white text-base font-serif font-medium rounded-bl-lg mx-auto">
          ₹{}
        </div>
      </div>
    </button>
  );
};

export default dynamic(() => Promise.resolve(StickyCart), { ssr: false });
