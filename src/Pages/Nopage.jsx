import React from "react";
import errimg from "../Images/404.svg";

function Nopage() {
  return (
    <>
      <div className="flex space-y-10 flex-col p-20 justify-center items-center ">
        <img className="w-[80vh]" src={errimg} alt="404" />
        <h2 className="text-5xl text-blue-700 font-semibold">
          Page Not found{" "}
        </h2>
        <p className="text-2xl ">
          The Page you are looking for is not exist or Permanently Moved
        </p>
      </div>
    </>
  );
}

export default Nopage;
