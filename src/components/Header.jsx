import { Button, Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
import { getMenus } from "../router/router";

function Header() {
  const getMenu = getMenus();

  const token = localStorage.token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between p-[40px]">
      <div className="flex space-x-9">
        <Link to="/" className="text-[30px] font-bold">
          EventHub
        </Link>
      </div>

      <div className="flex gap-[48px]">
        {getMenu.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            className={({ isActive }) =>
              isActive ? "bg-btn text-[#fff] px-5 py-1 rounded" : ""
            }
          >
            {menu.label}
          </NavLink>
        ))}
      </div>

      <Input
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />

      {token ? (
        <Button
          variant="contained"
          onClick={() => handleLogout()}
          style={{
            borderRadius: 3,
            backgroundColor: "#7848f4",
          }}
        >
          Çıxış
        </Button>
      ) : (
        <div className="flex items-center gap-[50px]">
          <Link to="/login">Daxil ol</Link>
          <Link
            to="register"
            className="bg-[#7848f4] font-bold px-[30px] py-[15px] text-[#fff] rounded"
          >
            Qeydiyyat
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;