import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let loggedInCheck = sessionStorage.getItem("response");
  const buttonCheck = () => {
    sessionStorage.clear();
    window.location.replace("/login");
  };
  return (
    <>
      <div className="flex justify-between bg-slate-50 p-5 shadow-lg   flex-row items-center md:px-40 ">
        <span className="text-blue-800 hover:text-slate-500 text-3xl duration-[250ms] transition-all font-bold">
          <Link to="/">Antika</Link>
        </span>
        <nav className="md:flex hidden">
          <Link
            to="/"
            className="font-medium text-slate-900 duration-[250ms] transition-all hover:text-slate-400 m-2"
          >
            Home
          </Link>

          <Link
            to={"models"}
            className="font-medium text-slate-900 duration-[250ms] transition-all hover:text-slate-400 m-2"
          >
            Models
          </Link>
          <Link
            to={"contribute"}
            className="font-bold text-slate-800 duration-[250ms] transition-all hover:text-slate-400 m-2"
          >
            Contribute
          </Link>
          <Link
            to={"contact"}
            className="font-medium text-slate-900 duration-[250ms] transition-all hover:text-slate-400 m-2"
          >
            Contact
          </Link>
          {loggedInCheck ? (
            <>
              <Link
                onClick={buttonCheck}
                className="font-bold  text-purple-900 duration-[250ms] transition-all hover:text-slate-400 m-2"
              >
                Logout
              </Link>
              <Link
                to={"/Dashboard"}
                className="font-bold  text-purple-900 duration-[250ms] transition-all hover:text-slate-400 m-2"
              >
                Go To Dashboard
              </Link>
            </>
          ) : (
            <Link
              to={"login"}
              className="font-bold  text-purple-900 duration-[250ms] transition-all hover:text-slate-400 m-2"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
