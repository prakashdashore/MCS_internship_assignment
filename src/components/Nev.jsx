import { Link } from "react-router-dom";
import logo from "../assets/image 1.png";
const Nev = () => {
  return (
    <>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/' className="flex items-center">
            <img src={logo} alt="logo" />
          </Link>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <li>
                  <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="mega-menu-full-dropdown"
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Solutions{" "}

                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d = "m1 1 4 4 4-4"

                      />
                    </svg>
                  </button>
                </li>
              </li>
              <li>
              <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="mega-menu-full-dropdown"
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features{" "}

                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d = "m1 1 4 4 4-4"

                      />
                    </svg>
                  </button>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </a>
              </li>
              <li>
              <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="mega-menu-full-dropdown"
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About{" "}

                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d = "m1 1 4 4 4-4"

                      />
                    </svg>
                  </button>
              </li>
            </ul>
          </div>

          <div className="flex md:order-2">
            <button
              type="button"
              className="text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-3 border-2 border-blue-600"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Resister
            </button>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nev;
