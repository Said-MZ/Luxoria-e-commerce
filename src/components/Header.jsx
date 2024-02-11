import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-elements flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link className="link link-hover text-xs sm:text-sm" to={"/register"}>
            Sign in / Guest
          </Link>
          <Link className="link link-hover text-xs sm:text-sm" to={"/register"}>
            Create an Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
