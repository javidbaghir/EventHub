import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10 space-y-10">
        <figure className="size-[460px]">
          <img
            className="size-full object-contain"
            src="../../../../public/404.page.svg"
            alt=""
          />
        </figure>

        <div>
          <p className="font-bold text-[30px]">
            Axtardığınız səhifəni tapa bilmirik
          </p>
        </div>

        <Link
          to={"/"}
          className="bg-btn px-5 py-1 rounded-full text-white "
          variant="contained"
        >
          Ana Səhifəyə Qayıt
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
