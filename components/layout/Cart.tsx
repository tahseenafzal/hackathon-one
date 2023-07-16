import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  return (
    <div className="bg-[#f1f1f1] rounded-full w-[46px] h-[46px] p-3 relative">
      <FiShoppingCart className="font-bold" size={18} />
      <span className="flex justify-center items-center rounded-full bg-[#f02d34] text-[#eeeeee] text-[12px] w-[18px] h-[18px] absolute top-0 right-1">
        0
      </span>
    </div>
  );
};

export default Cart;
