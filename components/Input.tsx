"use client";
import { IoIosSearch } from "react-icons/io";

const Input = () => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input 
      className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
      type="text" 
      placeholder="Search City" />
      <div className="ml-[-25px] cursor-pointer text-white">
        <IoIosSearch />
      </div>
    </form>
  );
};

export default Input;
