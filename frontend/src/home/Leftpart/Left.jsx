import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "../left1/Logout";

function Left() {
  return (
    <div className="w-72 sm:w-80 lg:w-[320px] bg-black text-gray-300 h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-4">
        <h1 className="font-bold text-2xl sm:text-3xl">Chats</h1>
        <Logout />
      </div>
      <Search />
      <div className="flex-1 overflow-y-auto">
        <Users />
      </div>
    </div>
  );
}

export default Left;
