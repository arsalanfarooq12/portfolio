import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";

const navigation = [
  { name: "Home ", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [showPreview, setShowPreview] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Arsalan_Resume.pdf";
    link.download = "Arsalan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Disclosure as="nav" className="bg-transparent sticky top-0 z-50">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* ---------- Left: Logo + Nav ---------- */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="left-0 flex flex-shrink-0 items-center">
                  <a href="#contact">
                    <img
                      className="h-12 w-12 rounded-full bg-blue-500 hover:bg-indigo-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                      src={logo}
                      alt="Profile"
                    />
                  </a>
                </div>

                <div className="sm:ml-6">
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

              {/* ---------- Right: Resume button ---------- */}
              <button
                onClick={() => setShowPreview(true)}
                className="bg-blue-500 text-white border border-blue-500 hover:bg-blue-700
                  px-4 py-1.5 rounded-lg text-sm font-medium cursor-pointer
                  transition-all duration-200"
              >
                Download Resume ↓
              </button>
            </div>
          </div>

          {/* ---------- Preview Modal ---------- */}
          {showPreview && (
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
              onClick={() => setShowPreview(false)}
            >
              <div
                className="flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal header */}
                <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
                  <span className="text-sm font-medium text-neutral-900">
                    Arsalan_Farooq_Resume.pdf
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={downloadResume}
                      className="rounded-lg bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-700"
                    >
                      Download ↓
                    </button>
                    <button
                      onClick={() => setShowPreview(false)}
                      className="rounded-lg border border-neutral-300 px-4 py-1.5 text-sm font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-900"
                    >
                      Close ✕
                    </button>
                  </div>
                </div>

                {/* PDF preview */}
                <iframe
                  src="/Arsalan_Resume.pdf"
                  title="Resume Preview"
                  className="w-full flex-1"
                />
              </div>
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
}
