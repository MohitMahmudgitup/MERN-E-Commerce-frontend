import React from "react";
import Logo from "../components/logo";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-20 shadow-md px-4 bg-white">
      <div className="h-full container mx-auto flex items-center justify-between px-2">
        <div className="">
          <Link to={"/"}>
          <Logo className="" w={100} h={70} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-2/5 justify-evenly border rounded-full focus-within:shadow">
          <div className=" text-white w-20 h-10 bg-zinc-800 text-lg flex items-center justify-center rounded-l-full ">
            <IoSearch />
          </div>
          <input
            className="w-full h-10 outline-none px-2 rounded-r-full "
            type="text"
            placeholder="Search product hear..."/>
        </div>
        <div className="flex  items-center gap-7">
          <div className="text-3xl cursor-pointer">
            <FaRegUserCircle />
          </div>
          <div className="text-3xl cursor-pointer relative">
            <span>
            <LuShoppingCart />
            </span>
            <div className="absolute -top-2 -right-2 font-bold text-xs bg-red-700 text-white w-5 h-5 flex items-center justify-center rounded-full ">
              <p>0</p>
              </div>
          </div>

          <div className="">
          <Link to={"/login"} className="bg-zinc-800 hover:bg-zinc-600 text-white px-5 py-2 rounded-md ">Login</Link>
          {/* <button className="mx-1 bg-zinc-800 hover:bg-zinc-600 text-white px-5 py-2 rounded-md">Logout</button> */}
        </div>

        </div>
        
      </div>
    </header>
  );
}

export default Header;
