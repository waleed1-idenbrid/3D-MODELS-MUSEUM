import React from "react";
import { Link } from "react-router-dom";

// console.log(latestmodels);
export default function Models(props) {
  return (
    <>
      <div className=" col-span-1">
        <div className="flex flex-col py-5 space-y-4  items-center border rounded-md shadow-[#aaa] m-4">
          <Link to={props.href}>
            <img
              className="transition-all w-20 duration-[0.25s] rounded-lg  hover:opacity-40 hover:w-32 cursor-pointer "
              src={props.img}
              alt=""
            />
          </Link>

          <h2 className="text-gray-500 font-bold text-center text-xl">
            {props.title}
          </h2>
          <p className="text-gray-500 p-3 text-center text-md">
            {props.description.slice(0, 30)}
          </p>
          <Link
            to={props.href}
            className="bg-slate-300 p-2 border-purple-500 border rounded-md hover:bg-purple-500"
          >
            View Model
          </Link>
        </div>
      </div>
    </>
  );
}
