import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-[1px] border-gray-700 flex items-center w-full py-2 px-3 rounded-xl grow outline-none bg-slate-900"
          />
        </div>
        <button type="submit" className="p-2 rounded-lg hover:bg-gray-700">
          <IoSend className="text-2xl sm:text-3xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
