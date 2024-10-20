import React from "react";
import { Link, NavLink } from "react-router-dom";
import { getMenus } from "../../router/router";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";

function Footer() {
  const getMenu = getMenus();
  return (
    <div className="p-[30px] bg-footerBg space-y-[30px] mt-5">
      <div className="flex justify-center">
        <Link
          to={"/"}
          className="text-[40px] font-bold text-[#fff] cursor-pointer"
        >
          EventHub
        </Link>
      </div>

      <div className="flex justify-center">
        {getMenu.map((menu, index) => (
          <NavLink
            key={index}
            className={"h-48px px-[40px] text-[#fff]"}
            to={menu.path}
          >
            {menu.label}
          </NavLink>
        ))}
      </div>

      <hr className="text-[#fff]" />

      <div className="flex items-center justify-center text-[#fff] space-x-[15px]">
        <Link to={"https://www.instagram.com/"} target="blank">
          <FaInstagram className="size-[25px]" />
        </Link>
        <Link to={"https://linkedin.com/"} target="blank">
          <CiLinkedin className="size-[25px]" />
        </Link>
        <Link to={"https://www.facebook.com/"} target="blank">
          <CiFacebook className="size-[25px]" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
