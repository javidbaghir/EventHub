import React, { useState } from "react";
import EventCard from "./EventCard";
import useFetch from "../../hooks/UseFetch";
import LoadMoreButton from "../LoadMoreButton";

function EventCategorySection({ url }) {
  const [limit, setLimit] = useState(3);

  const { data: events, loading, error } = useFetch(url);
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-5">
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
