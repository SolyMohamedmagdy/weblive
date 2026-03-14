"use client";
import Link from "next/link";
import { useState } from "react";

function MobileButtonHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return isOpen ? (
    <div className="flex sm:hidden gap-2 bg-teal-700 rounded-2xl py-2 px-3 text-white hover:bg-teal-600 transition">
      <div onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      {
        /* Mobile menu items can be added here */
        isOpen && (
          <div className="absolute top-16 left-0 w-full bg-slate-200 text-black flex flex-col items-center py-5">
            <Link href="/" className="link p-4" onClick={handleClick}>
              Home
            </Link>
            <Link href="/about" className="link p-4" onClick={handleClick}>
              About
            </Link>
            <Link href="/courses" className="link p-4" onClick={handleClick}>
              Courses
            </Link>
            <div>
              <Link href="/login" onClick={handleClick}>
                {" "}
                <button
                  type="button"
                  className="bg-teal-700 py-2 w-20 text-white hover:cursor-pointer hover:bg-teal-600 transition"
                >
                  Login
                </button>{" "}
              </Link>
              <Link href="/signup" onClick={handleClick}>
                {" "}
                <button
                  type="button"
                  className=" outline-2 outline-black py-2 w-20 text-black hover:cursor-pointer hover:bg-white transition"
                >
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        )
      }
    </div>
  ) : (
    <div
      className="flex sm:hidden gap-2 bg-teal-700 rounded-2xl py-2 px-3 text-white hover:bg-teal-600 transition"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </div>
  );
}

export default MobileButtonHeader;
