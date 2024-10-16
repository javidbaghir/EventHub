import { Button, Typography } from "@mui/material";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function EventDetailsHero({ data }) {
  const { photo, title } = data;

  return (
    <div>
      <div className="relative">
        <figure className="h-[600px] w-full bg-no-repeat">
          <img
            className="aspect-[3/4] size-full object-cover rounded-xl"
            src={photo}
            alt=""
          />
        </figure>

        <div className="absolute inset-0 backdrop-opacity-10 backdrop-invert bg-[#000]/50 ">
          <div>
            <Button
              className="absolute top-[30px] left-[5%]"
              style={{ backgroundColor: "#7848f4", color: "#FFFFFF" }}
              variant="contained"
              startIcon={<IoIosArrowBack />}
            >
              <Link to={"/"}>Geri</Link>
            </Button>
          </div>
          <div>
            <Typography
              className="w-[50%] absolute inset-0 top-[30%] left-[5%]"
              variant="h6"
              component="h1"
              style={{ color: "#fff", fontWeight: "bold" }}
              sx={{ fontSize: 30 }}
            >
              {title}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsHero;
