import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { items } from "../../fakedatabse/database";

function Hero() {
  const [index, setIndex] = useState(0);

  const handleRightBtn = () => {
    setIndex((prevIndex) =>
      prevIndex === items.length - 1 ? (prevIndex = 0) : prevIndex + 1
    );
  };

  const handleLeftBtn = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? (prevIndex = items.length - 1) : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightBtn();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = items[index] || items[0];

  return (
    <div>
      <div
        className="md:w-full md:h-[596px] md:rounded-2xl relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${currentItem.photoUrl})` }}
      >
        <div className="absolute inset-0 backdrop-opacity-10 backdrop-invert bg-[#000]/30">
          <div className="flex justify-center text-center top-[20%] absolute inset-0 px-20">
            <Typography
              variant="h3"
              component="h2"
              style={{ color: "#fff", fontWeight: "bold" }}
              sx={{ fontSize: 50 }}
            >
              {currentItem.name}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
