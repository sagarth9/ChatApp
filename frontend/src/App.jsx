import React from "react";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="drawer lg:drawer-open h-screen">
                <input
                  id="chat-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                  <Right />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="chat-drawer"
                    className="drawer-overlay"
                    aria-label="Close sidebar"
                  ></label>
                  <Left />
                </div>
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;













 
