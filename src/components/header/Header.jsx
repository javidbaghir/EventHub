import { useState } from "react";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { getMenus } from "../../router/router";
import { useContextGlobal } from "../../context/GlobalContext";
import { removeStorage } from "../../utils/StorageUtils";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const getMenu = getMenus();
  const { storage } = useContextGlobal();

  const handleLogout = () => {
    removeStorage("token");
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between p-[20px] md:p-[40px] flex-wrap">
      <div className="flex items-center space-x-4 md:space-x-9">
        <div className="md:hidden sm:hidden">
          <button onClick={toggleMenu}>
            <MenuIcon style={{ fontSize: 30 }} />
          </button>
        </div>

        <Link to="/" className="text-[24px] md:text-[30px] font-bold">
          <figure className="w-[80px] h-[12px] md:w-[130px] md:h-[20px]">
            <img
              className="size-full object-cover"
              src="../public/EventHub.svg"
              alt=""
            />
          </figure>
        </Link>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } space-x-5 md:flex gap-[20px] md:gap-[48px] flex-col items-center md:flex-row absolute md:relative top-[70px] left-0 right-0 md:top-auto md:left-auto md:right-auto bg-white md:bg-transparent z-10 p-4 md:p-0`}
      >
        {getMenu.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            className={({ isActive }) =>
              isActive
                ? "bg-btn text-[#fff] px-3 text-[12px] md:text-[14px] md:px-5 py-2 rounded-lg"
                : ""
            }
          >
            {menu.label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-[20px] md:gap-[50px] md:mt-0">
        {storage.token ? (
          <Button
            variant="contained"
            onClick={() => handleLogout()}
            style={{
              borderRadius: 8,
              backgroundColor: "#7848f4",
            }}
          >
            Çıxış
          </Button>
        ) : (
          <>
            <Link to="/login">Daxil ol</Link>
            <Link
              to="/register"
              className="bg-[#7848f4] font-bold px-[20px] md:px-[30px] py-[10px] md:py-[15px] text-[#fff] rounded"
            >
              Qeydiyyat
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
