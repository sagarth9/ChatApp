import React from "react";
import useConversation from "../../stateManage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import userImg from "../../assets/user.png";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="px-4 py-3 flex items-center gap-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <label
        htmlFor="chat-drawer"
        className="btn btn-ghost drawer-button lg:hidden"
        aria-label="Open chats"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={selectedConversation.avatar || userImg} alt="user" />
        </div>
      </div>
      <div className="min-w-0">
        <h1 className="text-lg sm:text-xl truncate">
          {selectedConversation.fullname ||
            selectedConversation.name ||
            "Unknown User"}
        </h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
