import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-full w-full bg-teal-900 flex flex-col text-white">
      <Link to={"/home"} className="mb-10">
        <h1 className="text-center  text-3xl font-semibold pt-5">Transactions</h1>
      </Link>

      <div id="main" className>
        <h2 className="mb-2 px-2 text-orange-400 font-bold ">Main</h2>
        <div className="linksList mb-10">
          <ul className="flex flex-col cursor-pointer">
            <Link to={"/home"}>
              <li className="py-2 px-2 mb-1  hover:bg-orange-400">Dashboard</li>
            </Link>
            <li className="py-2 px-2 mb-1  hover:bg-orange-400">Payment</li>
            <li className="py-2 px-2 mb-1  hover:bg-orange-400">Cards</li>
            <li className="py-2 px-2 mb-1  hover:bg-orange-400">Insights</li>
          </ul>
        </div>
        <h2 className="mb-2 px-2 text-orange-400 font-bold">Other</h2>
        <div className="otherList">
          <ul className="flex flex-col cursor-pointer">
            <li className="py-2 px-2 mb-1 hover:bg-orange-400">
              Customer support
            </li>
            <li className="py-2 px-2 mb-1 hover:bg-orange-400">Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
