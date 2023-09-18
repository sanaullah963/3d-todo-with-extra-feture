import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <main>
      <div className="bg-gray-900 flex justify-between items-center py-3 px-3 text-white">
        {/* logo */}
        <div className="w-1/6 flex justify-center">
          <Link href={"/"}>
            <h2 className="text-4xl">LOGO</h2>
          </Link>
        </div>
        {/* nav item */}
        <ul className="w-3/6 flex justify-center items-center gap-5">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/mycounter"}>
            <li>Counter</li>
          </Link>
          <Link href={"/todoin"}>
            <li>Enter todo</li>
          </Link>
          <Link href={"/todolist"}>
            <li>Todo list</li>
          </Link>
        </ul>
        {/* login button */}
        <div>
          <Link href={"/login"}>
            <button className="text-white bg-sky-500 px-4 rounded-lg py-2">Login</button>
          </Link>
        </div>
        {/* search bar */}
        <div className="w-1/6">
          <div className="bg-white h-10 flex justify-center items-center rounded-lg">
            <input
              className="w-4/5 h-full px-2 outline-none text-black rounded-lg"
              type="search"
            />
            <button className="h-8 m-1 w-1/5 bg-slate-400 flex justify-center items-center rounded-lg">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
