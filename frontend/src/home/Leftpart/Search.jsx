import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers.jsx";
import useConversation from "../../stateManage/useConversation.js";
import toast from "react-hot-toast";
function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  console.log(allUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.name?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };
  return (
    <div className="px-4 pb-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg px-3 py-2 flex items-center gap-2 w-full">
            <input
              type="text"
              className="grow outline-none bg-transparent"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="rounded-full hover:bg-gray-600 duration-300 p-2"
            aria-label="Search"
          >
            <FaSearch className="text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
