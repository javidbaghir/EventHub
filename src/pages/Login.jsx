import React from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import PageTitle from "../components/PageTitle";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="grid grid-cols-3 p-5">
      <div>
        <Link to={"/"}>
          <Typography sx={{ fontWeight: "bold" }} color="#7848f4" variant="h5">
            EventHub
          </Typography>
        </Link>
      </div>

      <div className="flex flex-col items-center space-y-3">
       <PageTitle title={"Daxil Olun"}/>

        <div className="flex flex-col gap-5 justify-center items-center w-[300px]">
          <TextField id="filled-basic" label="Email" fullWidth />

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Parol</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            style={{ backgroundColor: "#7848f4", color: "#FFFFFF" }}
            variant="contained"
            fullWidth
          >
            Daxil Ol
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <NavLink to={"/register"}>
          <Typography variant="h5">
            <span className="bg-btn text-[#fff] px-3 rounded py-1">
              Qeydiyyat
            </span>
          </Typography>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
