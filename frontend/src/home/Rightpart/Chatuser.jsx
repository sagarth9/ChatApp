import React from "react";
import useConversation from "../../stateManage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";
import userImg from "../../assets/user.png";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className=" pl-5 pt-5 h-[13vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src={selectedConversation.avatar || userImg} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.fullname || selectedConversation.name || "Unknown User"}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;