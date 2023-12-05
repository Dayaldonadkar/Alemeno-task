import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center  bg-[#FAF7F2] ">
      <div className="flex justify-between w-[90%] sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] py-4 items-center">
        <Link to="/">
          <img
            src="https://www.alemeno.com/static/assets/images/logo.png"
            alt=""
          />
        </Link>
        <div>Dashboard</div>
      </div>
    </div>
  );
};

export default Navbar;
