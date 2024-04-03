import React from "react";
import Error from "../assets/404.png";
import { Link, redirect } from "react-router-dom";

function Page404() {
  const handleClick = () => {};
  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100">
      <Link to={"/"}>
        <img
          className="hover:cursor-pointer"
          onClick={handleClick}
          src={Error}
          alt="404"
        />
      </Link>
    </div>
  );
}

export default Page404;
