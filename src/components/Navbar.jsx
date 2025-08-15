import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";

// Navigation items with anchor links
const navigation = [
  { name: "Home ", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent sticky top-0 z-50 ">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* ------------ */}

              {/* Mobile menu button */}

              {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div> */}

              {/* ---------- */}

              {/* Logo/Profile */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className=" left-0 flex flex-shrink-0 items-center">
                  <a href="#contact">
                    <img
                      className="h-12 w-12 rounded-full bg-blue-500 hover:bg-indigo-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                      src={logo}
                      alt="Profile"
                    />
                  </a>
                </div>

                {/* ------------ */}

                {/* Desktop Navbar */}
                <div className=" sm:ml-6 ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Navbar */}

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
}
