"use client";
import { IoIosSearch } from "react-icons/io";

type InputProps = {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({handleSearch, setLocation}: InputProps) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input 
      className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
      type="text" 
      placeholder="Search City" 
      onKeyDown={handleSearch}
      onChange={(e)=> setLocation(e.target.value) }
      />
      
      <div className="ml-[-25px] cursor-pointer text-white">
        <IoIosSearch />
      </div>
    </form>
  );
};

export default Input;
