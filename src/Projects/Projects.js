import React from "react";
import Container from "./Container";
import fintech2 from "../images/fintech2.png";
import suit from "../images/suit.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <Link to="/Homepage" class="flex ml-2 md:mr-24">
                <img src={fintech2} className="h-[2.5rem]" />
              </Link>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src={suit} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class=" bg-[#1b1b1b] sm:ml-64">
        <div class="p-7  rounded-lg  mt-14">
          <Container />
        </div>
      </div>
    </>
  );
};

export default Projects;
