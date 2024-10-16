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
import PageTitle from "../components/PageTitle";
import { AUTH_ENDPOINT } from "../api/AuthEndpoint";
import { ApiPost } from "../api/Api";
import { getStorage, setStorage } from "../utils/StorageUtils";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    email: "",
    passsword: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setValues((oldValues) => ({
      ...oldValues,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    let tempErrors = { email: "", password: "" };
    let isValid = true;

    if (!values.email) {
      tempErrors.email = "Email boş ola bilməz";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email)) {
        tempErrors.email = "Düzgün email daxil edin.";
        isValid = false;
      }
    }

    if (!values.password) {
      tempErrors.password = "Parol boş ola bilməz";
      isValid = false;
    } else if (values.password.length < 3) {
      tempErrors.password = "Parol minimum 3 simvoldan ibarət olmalıdır";
      isValid = false;
    }

    setError(tempErrors);
    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const login = await ApiPost(AUTH_ENDPOINT.login, values);

        if (login.status === 200 && login.data) {
          setStorage("token", login.data.token);
          window.location.reload();
        }
      } catch (error) {
        setError((prev) => ({
          ...prev,
          email: "Email və ya parol yanlışdır.",
        }));
      }
    }
  };

  // const user = await ApiGet(AUTH_ENDPOINT.user, {
  //   headers: {
  //     Authorization: `Bearer ${login.data.token}`,
  //   },
  // });

  // if (user.status === 200) {
  //   setStorage("token", login.data.token);
  //   setStorage("user", user.data);
  //   window.location.reload();
  // }

  if (getStorage("token")) return <Navigate to={"/"} />;

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
        <PageTitle title={"Daxil Olun"} />

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 justify-center items-center w-[300px]"
        >
          <TextField
            name="email"
            value={values.email}
            onChange={handleFieldChange}
            id="filled-basic"
            label="Email"
            fullWidth
            error={Boolean(error.email)}
            helperText={error.email}
          />

          <FormControl
            variant="outlined"
            fullWidth
            error={Boolean(error.password)}
          >
            <InputLabel htmlFor="outlined-adornment-password">Parol</InputLabel>
            <OutlinedInput
              name="password"
              value={values.password}
              onChange={handleFieldChange}
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
          {error.password && (
              <Typography variant="caption" color="error">
                {error.password}
              </Typography>
            )}
          </FormControl>

          <Button
            type="submit"
            style={{ backgroundColor: "#7848f4", color: "#FFFFFF" }}
            variant="contained"
            fullWidth
          >
            Daxil Ol
          </Button>
        </form>
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
