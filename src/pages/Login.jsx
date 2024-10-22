import React, { useState } from "react";
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
import { Link, Navigate, NavLink } from "react-router-dom";
import PageTitle from "../components/titles/PageTitle";
import { AUTH_ENDPOINT } from "../api/AuthEndpoint";
import { ApiPost } from "../api/Api";
import { getStorage, setStorage } from "../utils/StorageUtils";
import { useForm } from "../hooks/UseForm";
import Loading from "../components/loading/Loading";
import { useContextGlobal } from "../context/GlobalContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { errors } = useContextGlobal();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const { value, loading, setField, handleSubmit } = useForm({
    initialState: {
      email: "",
      password: "",
    },

    onSubmit: async (value) => {
      const login = await ApiPost(AUTH_ENDPOINT.login, value);

      if (login.status === 200 && login.data) {
        setStorage("token", login.data.token);
        window.location.reload();
      }
    },
  });

  if (getStorage("token")) return <Navigate to={"/"} />;

  return (
    <div className="grid md:grid-cols-3 p-5 space-y-8">
      <div>
        <Link to={"/"}>
          <Typography sx={{ fontWeight: "bold" }} color="#7848f4" variant="h5">
            EventHub
          </Typography>
        </Link>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <PageTitle title={"Daxil Olun"} />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 justify-center items-center w-[300px]"
        >
          <TextField
            name="email"
            value={value.email}
            onChange={(e) => setField("email", e.target.value)}
            id="filled-basic"
            label="Email"
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <FormControl
            variant="outlined"
            fullWidth
            error={Boolean(errors.password)}
          >
            <InputLabel htmlFor="outlined-adornment-password">Parol</InputLabel>
            <OutlinedInput
              name="password"
              value={value.password}
              onChange={(e) => setField("password", e.target.value)}
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
            {errors.password && (
              <Typography variant="caption" color="error">
                {errors.password}
              </Typography>
            )}

            {errors.message && (
              <Typography variant="caption" color="error">
                {errors.message}
              </Typography>
            )}
          </FormControl>

          <Button
            type="submit"
            style={{ backgroundColor: "#7848f4", color: "#FFFFFF" }}
            variant="contained"
            fullWidth
          >
            {loading ? <Loading /> : "Daxil Ol"}
          </Button>
        </form>
      </div>

      <div className="flex md:justify-end justify-center">
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
