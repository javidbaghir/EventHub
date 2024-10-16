import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function MakeOwnEvent() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-20 bg-[#10107b] py-[35px] space-y-5 mb-5 relative">
        <div className="flex justify-end -mt-20">
          <figure className="w-[360px]">
            <img
              className="object-cover size-full"
              src="../public/event.png"
              alt=""
            />
          </figure>
        </div>
        <div className="space-y-5">
          <div>
            <Typography
              variant="h5"
              component="h2"
              className=" bg-[#10107b] text-[#fff] font-bold"
            >
              Öz Tədbirini Yarat
            </Typography>
          </div>
          <div>
            <Link
              to={"/createEvent"}
              className="text-center w-[200px] bg-btn text-[#fff] px-5 py-2 rounded-md"
            >
              Tədbir Yarat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeOwnEvent;
