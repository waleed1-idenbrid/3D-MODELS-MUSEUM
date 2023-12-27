import React from "react";

function Header(props) {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1280x720/?ancient,museum')",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0, 2, 150, 0.541)" }}
          className="flex flex-col space-y-5 justify-center items-center text-center min-h-[500px] text-white "
        >
          <h1 className="text-4xl font-[800]">{props.title}</h1>
          <p className="text-2xl font-medium">{props.description}</p>
        </div>
      </div>
      <div className="md:px-40 my-5">
        <span className="text-xl font-[400] p-2 border-b-5">
          Antika / {props.pageTitle}{" "}
        </span>
      </div>
    </>
  );
}

export default Header;
