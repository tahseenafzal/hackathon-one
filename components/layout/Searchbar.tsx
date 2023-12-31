import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div className="flex  items-center border border-gray-300 w-[321px] h-[27px] px-[5px] rounded-md">
      <FiSearch size={16} className="shrink-0" />
      <input
        className="w-full h-[25px] text-xs p-[5px]"
        type="text"
        placeholder="What you looking for"
      />
    </div>
  );
};

export default Searchbar;
