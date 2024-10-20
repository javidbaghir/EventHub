import React from "react";
import { useLocation } from "react-router-dom";
import EventCard from "../components/eventCategories/EventCard";

function Search() {
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-5">
        {data?.length > 0 ? (
          data.map((event) => (
            <EventCard
              key={event.id}
              id={event?.id}
              title={event?.title}
              photo={event?.photo}
              publishDate={event?.published_date}
            />
          ))
        ) : (
          <div>
            <p className="font-bold text-[30px]">Dəqiq nəticə tapılmadı</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
