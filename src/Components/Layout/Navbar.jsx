import React, { useState } from "react";

function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    "home",
    "sobre nós",
    "quem usa",
    "fale conosco",
    "preço",
    "faq",
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src={require("./Assets/gFit.png")}
              className={`h-8 mr-3 ${menuOpen ? "hidden" : "block"}`}
              alt="gFit Logo"
            />
            <span className="self-center text-mainblue text-2xl font-semibold whitespace-nowrap dark:text-white">
              gFit
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen ? "true" : "false"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {menuOpen || (
              <button
                type="button"
                className="w-32 px-7 py-3 rounded-full text-white bg-mainblue hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                login
              </button>
            )}
          </div>
          <div
            className={`items-center justify-between ${
              menuOpen ? "flex" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navItems.map((navItem) => (
                <a
                  className="mx-3 py-5 no-underline hover:underline transition-all"
                  href="#"
                  onClick={toggleMenu}
                >
                  {navItem}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
