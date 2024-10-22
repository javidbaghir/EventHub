import { Visibility, VisibilityOff } from "@mui/icons-material";
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
import React from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import PageTitle from "../components/titles/PageTitle";
import { useForm } from "../hooks/UseForm";
import { AUTH_ENDPOINT } from "../api/AuthEndpoint";
import { ApiPost } from "../api/Api";
import { useContextGlobal } from "../context/GlobalContext";
import { getStorage, setStorage } from "../utils/StorageUtils";
import Loading from "../components/loading/Loading";

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { errors } = useContextGlobal();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const { value, setField, handleSubmit, loading } = useForm({
    initialState: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    onSubmit: async (value) => {
      const register = await ApiPost(AUTH_ENDPOINT.register, value);

      if (register.status === 201 && register.data) {
        setStorage("token", register.data);
        const user = await apiGet(AUTH_ENDPOINT.user, {
          headers: {
            Authorization: `Bearer ${register.data}`,
          },
        });

        if (user.status === 200) {
          setStorage("user", user.data);
          window.location.reload();
        }
      }
    },
  });
  if (getStorage("token")) return <Navigate to={"/"} />;

  return (
    <div className="grid md:grid-cols-3 space-y-7">
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            error={errors.name}
            helperText={errors.name}
            onChange={(e) => setField("name", e.target.value)}
            name="name"
            value={value.name}
            id="filled-basic"
            label="Ad"
          />
          <TextField
            error={errors.surname}
            helperText={errors.surname}
            name="surname"
            value={value.surname}
            onChange={(e) => setField("surname", e.target.value)}
            id="filled-basic"
            label="Soyad"
          />
          <TextField
            error={errors.email}
            helperText={errors.email}
            name="email"
            value={value.email}
            onChange={(e) => setField("email", e.target.value)}
            id="filled-basic"
            label="Email"
          />

          <FormControl error={Boolean(errors.password)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Parol</InputLabel>
            <OutlinedInput
              error={errors.password}
              helperText={errors.password}
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
          >
            {loading ? <Loading /> : "Qeydiyyat"}
          </Button>
        </form>
      </div>
      <div className="flex md:justify-end justify-center">
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
