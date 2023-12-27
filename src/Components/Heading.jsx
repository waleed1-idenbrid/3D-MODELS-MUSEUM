import React from "react";

export default function Heading(props) {
  return (
    <>
      <div className=" shadow p-5 my-10 capitalize font-semibold  text-slate-800 text-center text-3xl">
        {props.text}
      </div>
      <div className="px-16">
        <div className="p-5  text-center mb-40">{props.description}</div>
      </div>
    </>
  );
}
