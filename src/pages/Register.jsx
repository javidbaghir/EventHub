import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import PageTitle from "../components/titles/PageTitle";

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="grid grid-cols-3 space-y-7">
      <div className="p-5">
        <Link to={"/"}>
          <Typography sx={{ fontWeight: "bold" }} color="#7848f4" variant="h5">
            EventHub
          </Typography>
        </Link>
      </div>

      <div className="flex flex-col mx-auto justify-center w-[400px] p-5 space-y-7">
        <div className="text-center space-y-10">
          <Typography sx={{ fontWeight: "bold" }} color="#7848f4" variant="h5">
            EventHub'a xoş gəlmisiniz
          </Typography>

          <PageTitle title={"Qeydiyyat"} />
        </div>

        <div className="flex flex-col gap-4">
          <TextField id="filled-basic" label="Ad" />
          <TextField id="filled-basic" label="Soyad" />
          <TextField id="filled-basic" label="Email" />

          <FormControl variant="outlined">
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

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Təkrar Parol
            </InputLabel>
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
          >
            Qeydiyyat
          </Button>
        </div>
      </div>
      <div className="flex justify-end">
        <NavLink to={"/login"}>
          <Typography variant="h5">
            <span className="bg-btn text-[#fff] px-3 rounded py-1">
              Daxil Olun!
            </span>
          </Typography>
        </NavLink>
      </div>
    </div>
  );
}

export default Register;
