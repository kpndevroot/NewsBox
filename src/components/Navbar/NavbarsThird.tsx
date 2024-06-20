import React from "react";
import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function NavbarThird() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between w-5/6 mx-auto ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex items-center gap-1 font-bold text-gray-700 "
                >
                  <PaperAirplaneIcon className="w-6 h-6 text-primary" />
                  <span>Paper.io</span>
                </a>
              </div>
              {/* primary */}
              <ul className="hidden gap-8 lg:flex">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
                <li>
                  <a href="#">Our Classes</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="items-center hidden gap-10 xs:flex">
                <div className="items-center hidden gap-2 lg:flex">
                  <MoonIcon className="w-6 h-6" />
                  <SunIcon className="w-6 h-6" />
                </div>
                <button className="px-4 py-2 border-2 border-gray-300 border-solid rounded-full hover:bg-gray-700 hover:text-gray-100">
                  Free Trial
                </button>
              </div>
              {/* Mobile navigation toggle */}
              <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="lg:hidden"
              >
                {toggleMenu ? (
                  <XMarkIcon className="h-6" />
                ) : (
                  <Bars3Icon className="h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile navigation */}
      {toggleMenu && (
        <ul
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700`}
        >
          <li>
            <a href="#" className="border-l-4 border-gray-600">
              Features
            </a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Classic</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavbarThird;
