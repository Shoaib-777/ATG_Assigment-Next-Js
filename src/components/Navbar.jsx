"use client";
import React, { useState } from "react";

import { MdSearch } from "react-icons/md";

function Navbar() {
  const [active, setActive] = useState({
    signIn: true,
    joinIn: false,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Switching = (value) => {
    if (value == "signIn") {
      setActive({
        signIn: true,
        joinIn: false,
      });
    } else if (value == "joinIn") {
      setActive({
        signIn: false,
        joinIn: true,
      });
    }
  };

  const [search, setSearch] = useState("");

  const [dropdowns, setDropdowns] = useState({
    explore: false,
    hobbies: false,
  });

  const onHover = (given) => {
    if (given == "explore") {
      setDropdowns({
        explore: true,
        hobbies: false,
      });
    } else if (given == "hobbies") {
      setDropdowns({
        explore: false,
        hobbies: true,
      });
    }
  };

  const onLeave = () => {
    console.log("leave");
    setDropdowns({
      explore: false,
      hobbies: false,
    });
  };

  const [showHide, setShowHide] = useState(false);

  return (
    <>
    <section className="flex items-center justify-center w-screen bg-custom-bg bg-cover bg-center">
  <div className="flex items-center justify-center w-full max-w-7xl px-3 sm:px-6 lg:px-8">
    <nav className="flex items-center justify-center w-full py-2.5">
      <span className="flex items-center justify-between gap-x-10 w-full">
        <span className="flex gap-x-8 items-center justify-start w-full">
          <img
            src={"/Images/HobbyCue Logo v2 1.png"}
            alt="logo here"
            className="h-10 sm:h-12"
          />
          <span className="hidden items-center justify-center xl:flex">
            <input
              type="text"
              placeholder="Search here ..."
              value={search}
              className="border-none rounded-e-none outline-[#8064A2] px-2.5 py-1.5"
              onChange={(ele) => setSearch(ele.currentTarget.value)}
            />
            <span className="px-2.5 py-1.5 bg-[#8064A2] text-white rounded-tr-lg  rounded-br-lg  border-1 border-solid border-[#8064A2] cursor-pointer">
              <MdSearch className="text-2xl" />
            </span>
          </span>
        </span>

        <span className="flex gap-x-5 items-center justify-end w-full">
          <ul className="hidden items-center justify-center gap-x-5 xl:flex">
            <li
              className="relative flex items-center justify-center text-base gap-x-1.5 cursor-pointer"
              onMouseEnter={() => onHover("explore")}
              onMouseLeave={() => onLeave()}
            >
              <img
                src={"/Images/Explore.png"}
                alt="icon here"
                className="h-6 w-6"
              />
              <span className="font-semibold text-black">Explore</span>
              <img
                src={"/Images/icons8_expand_arrow 1.png"}
                alt="dropdown here"
              />

              <ul
                className={`absolute bg-white top-6 ${
                  dropdowns.explore ? "flex" : "hidden"
                } flex-col items-start justify-start w-60 shadow-xl border-l-[1px] border-solid border-[#939CA3]`}
              >
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  People - Community
                </li>
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  People - Venues
                </li>
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  Program - Events
                </li>
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  Products - Store
                </li>
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  Blogs
                </li>
              </ul>
            </li>
            <li
              className="relative flex items-center justify-center text-base gap-x-1.5 cursor-pointer"
              onMouseEnter={() => onHover("hobbies")}
              onMouseLeave={() => onLeave()}
            >
              <img
                src={"/Images/Hobbies.png"}
                alt="icon here"
                className="h-6 w-6"
              />
              <span className="font-semibold text-black">Hobbies</span>
              <img
                src={"/Images/icons8_expand_arrow 1.png"}
                alt="dropdown here"
              />
              <ul
                className={`absolute bg-white top-6 ${
                  dropdowns.hobbies ? "flex" : "hidden"
                } flex-col items-start justify-start w-60 shadow-xl border-l-[1px] border-solid border-[#939CA3]`}
              >
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  People - Community
                </li>
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  People - Venues
                </li>
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  Program - Events
                </li>
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  Products - Store
                </li>
                <li className="border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full">
                  Blogs
                </li>
              </ul>
            </li>
            <li className="flex items-center justify-center text-base gap-x-1.5 cursor-pointer">
              <img
                src={"/Images/bookmark_black_24dp 1.png"}
                alt="icon here"
                className="h-6 w-6"
              />
            </li>
            <li className="flex items-center justify-center text-base gap-x-1.5 cursor-pointer">
              <img
                src={"/Images/notifications_black_24dp 1.png"}
                alt="icon here"
                className="h-6 w-6"
              />
            </li>
            <li className="flex items-center justify-center text-base gap-x-1.5 cursor-pointer">
              <img
                src={"/Images/Product 3.png"}
                alt="icon here"
                className="h-6 w-6"
              />
            </li>
            <button className="py-1.5 px-5 rounded-lg text-base cursor-pointer border-2 border-[#8064A2] border-solid">
              Sign In
            </button>
          </ul>

          <ul className="flex items-center justify-center gap-x-5 xl:hidden">
            <li className="flex items-center justify-center text-base gap-x-1.5 cursor-pointer">
              <img
                src={"/Images/icons8_search 1.png"}
                alt="icon here"
                className="h-6 w-6"
              />
            </li>
            <li className="flex items-center justify-center text-base gap-x-1.5 cursor-pointer">
              <img
                src={"/Images/Product 3.png"}
                alt="icon here"
                className="h-6 w-6"
              />
            </li>
            <li
              className="flex items-center justify-center text-base gap-x-1.5 cursor-pointer"
              onClick={() => setShowHide(true)}
            >
              <img
                src={"/Images/menu_black_24dp 1.png"}
                alt="icon here"
                className="h-6 w-6"
              />
            </li>
          </ul>
        </span>
      </span>

      {/* Menu */}
      <span
        className={`fixed top-0 h-screen left-0 flex flex-col items-center justify-start py-6 gap-16 px-6 duration-300 bg-white w-screen ${
          showHide ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span className="flex items-center justify-between w-full max-w-7xl">
          <img
            src={"/Images/HobbyCue Logo v2 2.png"}
            alt="loading error"
            className="h-10 w-10 cursor-pointer"
          />
          <img
            src={"/Images/close_black_24dp (2) 1.png"}
            alt="loading error"
            className="h-8 w-8 cursor-pointer"
            onClick={() => setShowHide(false)}
          />
        </span>
        <span className="flex flex-col items-center justify-end w-full gap-y-10 max-w-md">
          <span className="flex text-xl items-center justify-start gap-x-5 w-full">
            <img
              src={"/Images/Explore.png"}
              alt="loading error"
              className="h-10 w-10"
            />
            <span className="font-semibold text-black">Explore</span>
          </span>
          <span className="flex text-xl items-center justify-start gap-x-5 w-full">
            <img
              src={"/Images/Hobbies.png"}
              alt="loading error"
              className="h-10 w-10"
            />
            <span className="font-semibold text-black">Hobbies</span>
          </span>
          <span className="flex text-xl items-center justify-start gap-x-5 w-full">
            <img
              src={"/Images/bookmark_black_24dp 1.png"}
              alt="loading error"
              className="h-10 w-10"
            />
            <span className="font-semibold text-black">Bookmarks</span>
          </span>
          <span className="flex text-xl items-center justify-start gap-x-5 w-full">
            <img
              src={"/Images/notifications_black_24dp 1.png"}
              alt="loading error"
              className="h-10 w-10"
            />
            <span className="font-semibold text-black">Notifications</span>
          </span>
          <button className="py-2.5 px-10 rounded-lg text-xl cursor-pointer border-2 border-[#8064A2] border-solid">
            Sign In
          </button>
        </span>
      </span>
    </nav>
  </div>
</section>

    </>
  );
}

export default Navbar;
