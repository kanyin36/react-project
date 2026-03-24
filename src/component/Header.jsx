import { CircleX, Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed z-90 top-0 right-0 w-full flex justify-between items-center py-4 px-8 bg-slate-500">
      <span className="font-bold text-xl text-white">16/03</span>
      <div className="relative md:hidden">
        {showMenu ? (
          <CircleX
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            className="text-white"
          />
        ) : (
          <Menu
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            className="text-white"
          />
        )}
        {showMenu && (
          <div className="min-w-xs absolute top-11 right-0 bg-slate-300 p-5 flex flex-col gap-5 justify-center items-center">
            <NavLink to="/">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "font-bold text-white underline underline-offset-8"
                      : "text-black font-normal"
                  }
                >
                  Home
                </span>
              )}
            </NavLink>
            <NavLink to="/about">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "font-bold text-white underline underline-offset-8"
                      : "text-black font-normal"
                  }
                >
                  About
                </span>
              )}
            </NavLink>
            <NavLink to="/contact">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "font-bold text-white underline underline-offset-8"
                      : "text-black font-normal"
                  }
                >
                  Contact
                </span>
              )}
            </NavLink>
            <NavLink to="/product">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "font-bold text-white underline underline-offset-8"
                      : "text-black font-normal"
                  }
                >
                  Product
                </span>
              )}
            </NavLink>
            <Link
              className="text-red-700 text-sm font-bold"
              target="_blank"
              to={"https://google.com"}
            >
              Google
            </Link>
          </div>
        )}
      </div>
      <div className=" hidden md:flex md:gap-4 md:items-center md:justify-center">
        <NavLink to="/">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "font-bold text-white underline underline-offset-8"
                  : "text-black font-normal"
              }
            >
              Home
            </span>
          )}
        </NavLink>
        <NavLink to="/about">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "font-bold text-white underline underline-offset-8"
                  : "text-black font-normal"
              }
            >
              About
            </span>
          )}
        </NavLink>
        <NavLink to="/contact">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "font-bold text-white underline underline-offset-8"
                  : "text-black font-normal"
              }
            >
              Contact
            </span>
          )}
        </NavLink>
            <NavLink to="/product">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "font-bold text-white underline underline-offset-8"
                      : "text-black font-normal"
                  }
                >
                  Product
                </span>
              )}
            </NavLink>
        <Button  />
      </div>
    </nav>
  );
};

export default Header;
