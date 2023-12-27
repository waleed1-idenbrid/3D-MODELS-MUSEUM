import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-400 bg-purple-800 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a
              className="flex title-font font-medium items-center md:justify-start justify-center text-white"
              href="/"
            >
              <span className=" text-xl">Antika</span>
            </a>
            <p className="mt-2 text-sm text-white">
              The First Web Based 3D Museum in the world by Waleed Ahmad, Talha
              Akram and Qasim Ali
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-white" href="/">
                    Latest Models
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white" href="/">
                    Featured Models
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white" href="/">
                    {" "}
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white" href="/">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-purple-900 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2020 Antika — All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
