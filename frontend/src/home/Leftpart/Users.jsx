import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div className="flex flex-col h-full">
      <h1 className="px-4 py-2 text-white font-semibold bg-slate-800 rounded-md mx-4">
        Messages
      </h1>
      <div className="py-2 flex-1 overflow-y-auto">
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
