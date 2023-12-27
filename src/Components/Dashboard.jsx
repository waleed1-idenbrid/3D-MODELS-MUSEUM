import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";

const AddModel = () => {
  return <>add model</>;
};
const EditModel = () => {
  return <>edit model</>;
};

export default function Dashboard() {
  let loggedInCheck = sessionStorage.getItem("response");
  const buttonCheck = () => {
    sessionStorage.clear();
    window.location.replace("/login");
  };

  return loggedInCheck ? (
    <>
      <div className="grid grid-cols-5">
        <div className="flex flex-col items-center space-y-2 col-span-1 p-5 m-2 border-2 rounded-md">
          <button className="text-white bg-purple-600 hover:bg-purple-400 p-2 text-center  rounded-md transition-all duration-500">
            Add Models
          </button>
          <button className="text-white bg-purple-600 hover:bg-purple-400 p-2 text-center  rounded-md transition-all duration-500">
            Edit Models
          </button>
          <button
            onClick={buttonCheck}
            className="text-slate-700 hover:text-slate-200 p-2 text-center  rounded-md transition-all duration-500"
          >
            Logout
          </button>
        </div>
        <div className="flex col-span-4 p-5 m-2 text-3xl border-2 rounded-md">
          Comming Soon
        </div>
      </div>
    </>
  ) : (
    window.location.replace("/login")
  );
}
