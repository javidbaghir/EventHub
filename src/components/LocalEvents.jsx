import React, { useEffect, useState } from "react";
import { ApiGet } from "../api/Api";
import EventCard from "./EventCard";
import { Button } from "@mui/material";
import { fetchData } from "../utils/ApiHelper";

function LocalEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await fetchData('https://all-api.bitcode.az/api/news?limit=3&category=science');

      setEvents(Array.isArray(eventsData.data) ? eventsData.data : []);
    };

    fetchEvents();
  });

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-5">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
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
        <Button style={{ backgroundColor: "#7848f4", color: "#FFFFFF" }}>
          Daha çox
        </Button>
      </div>
    </div>
  );
}

export default LocalEvents;
