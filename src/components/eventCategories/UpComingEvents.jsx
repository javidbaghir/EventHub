import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Button } from "@mui/material";
import useFetch from "../../hooks/UseFetch";
import LoadMore from "../LoadMoreButton";
import LoadMoreButton from "../LoadMoreButton";

function UpComingEvents({url}) {

  const [limit, setLimit] = useState(6);

  const {
    data: events,
    loading,
    error,
  } = useFetch(url);


  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-5">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              photo={event.photo}
              publishDate={event.published_date}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="flex justify-center">
      <LoadMoreButton setLimit={setLimit}/>
      </div>
    </div>
  );
}

export default UpComingEvents;
