import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function EventCard({ id, title, photo, publishDate }) {
  return (
    <div>
      <div className="bg-white p-[20px] space-y-[15px] shadow-lg hover:shadow-2xl rounded-xl transition-shadow duration-300">
        <figure className="aspect-[4/3]">
          <img
            className="object-cover size-full rounded-md"
            src={photo}
            alt={title}
          />
        </figure>

        <div>
          <Typography
            variant="h6"
            component="h2"
            className="h-[60px] line-clamp-2"
          >
            {title}
          </Typography>
        </div>

        <div>
          <p className="text-btn">{publishDate}</p>
        </div>

        <div>
          <Link className="font-bold" to={`/eventDetails/${id}`} >
            Daha Ətraflı...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
