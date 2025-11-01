import { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
  ];
  return (
    <nav
      className="bg-slate-50 border-b-2 border-slate-300 px-4
    flex justify-between items-center h-16 shadow"
    >
      {/* logo section */}

      <div>
        <h2 className="text-2xl font-bold">Velora</h2>
      </div>

      {/* search bar */}
      <div>
        <label
          className={`input duration-1000 absolute
          ${
            open ? "top-18 right-1" : "top-[-200px] right-1"
          } md:static md:hidden`}
        >
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        {/* search bar for desktop and laptop view view */}
        <label className="input hidden lg:flex px-3 py-2 rounded-full border w-80">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        {/* modal search button */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div className="hidden md:block lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FaSearch className="text-xl" />
          </button>
          {isOpen && (
            <div className="modal modal-open modal-bottom sm:modal-middle">
              <div className="modal-box">
                <label className="input px-3 py-2 rounded-full border">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input type="search" required placeholder="Search" />
                </label>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={() => setIsOpen(false)} className="btn">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* nav links section */}
      <div
        className={`bg-slate-100 p-4 rounded absolute md:static duration-1000 ${
          open ? "top-28 right-4" : "top-[-200px] right-4"
        } md:bg-transparent`}
      >
        <ul className="md:flex gap-4">
          {routes.map((route) => (
            <NavLinks key={route.id} route={route}></NavLinks>
          ))}
        </ul>
      </div>
      {/* icons section */}
      <div className="flex items-center gap-4">
        {/* wishlist icon */}
        <div className="dropdown dropdown-hover relative">
          <div className="btn-ghost m-1">
            <FaHeart className="icon text-red-600 text-2xl" />
          </div>
          <ul
            className="dropdown-content menu bg-base-100 rounded-box
             z-9999 w-52 p-2 shadow-sm absolute"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* cart icon */}
        <div className="dropdown dropdown-hover relative">
          <div className="btn-ghost m-1">
            <FaShoppingCart className="text-2xl text-amber-600" />
          </div>
          <ul
            className="dropdown-content menu bg-base-100 rounded-box
             z-9999 w-52 p-2 shadow-sm absolute"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* user icon */}
        <div className="dropdown dropdown-hover relative">
          <div className="btn-ghost m-1">
            <FaUser className="text-2xl text-slate-600" />
          </div>
          <ul
            className="dropdown-content menu bg-base-100 rounded-box
             z-9999 w-52 p-2 shadow-sm absolute"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {/* menu bar icon */}
      <div onClick={() => setOpen(!open)} className="relative md:hidden">
        {open ? (
          <MdClose className="text-3xl cursor-pointer" />
        ) : (
          <FiMenu className="text-3xl cursor-pointer" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
