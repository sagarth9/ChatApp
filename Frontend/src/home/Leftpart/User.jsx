import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import userImg from "../../assets/user.png";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  // For safety: convert everything to string before comparing
  const isOnline = Array.isArray(onlineUsers)
    ? onlineUsers.some((entry) => String(entry) === String(user._id))
    : false;

  const isSelected =
    selectedConversation &&
    String(selectedConversation._id) === String(user._id);

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center space-x-4 px-6 py-3 cursor-pointer">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={user.avatar || userImg}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="min-w-0">
          <h1 className="font-bold truncate">{user.name}</h1>

          {/* 🔥 Only Text: Online / Offline */}
          <span
            className={`text-sm font-semibold ${
              isOnline ? "text-green-400" : "text-gray-400"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default User;
