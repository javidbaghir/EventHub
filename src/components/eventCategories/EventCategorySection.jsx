import React, { useState } from "react";
import EventCard from "./EventCard";
import useFetch from "../../hooks/UseFetch";
import LoadMoreButton from "../LoadMoreButton";

function EventCategorySection({ category }) {


  const [limit, setLimit] = useState(3);

  const { data: events, loading, error } = useFetch(`https://all-api.bitcode.az/api/news?limit=${limit}&category=${category}`);
  return (
    <div className="space-y-8">
      <div className="md:grid grid-cols-3 gap-5">
        {events?.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              id={event?.id}
              title={event?.title}
              photo={event?.photo}
              publishDate={event?.published_date}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="flex justify-center">
        <LoadMoreButton setLimit={setLimit} />
      </div>
    </div>
  );
}

export default EventCategorySection;
