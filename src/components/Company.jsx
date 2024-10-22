import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import LoadMoreButton from "./LoadMoreButton";
import EventCard from "./eventCategories/EventCard";

function Company() {
  const { slug } = useParams();
  const { data: events } = useFetch(
    `https://all-api.bitcode.az/api/news?authorSlug=${slug}`
  );
  const { data: author } = useFetch(
    `https://all-api.bitcode.az/api/authors/slug/${slug}`
  );

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <figure className="md:size-[160px] size-[100px] rounded-full overflow-hidden">
            <img
              className="size-full object-cover"
              src={author?.photo}
              alt=""
            />
          </figure>

          <div>
            <span className="md:text-[30px] text-[18px] font-bold">
              {author?.fullname}
            </span>
          </div>
        </div>
        <div className="bg-btn md:px-5 md:py-2 px-2 py-1 text-white rounded-lg">
          <span> Tədbir sayı: {events?.length}</span>
        </div>
      </div>

      <hr className="h-[1px]" />

      <div>
        <span className="text-[20px] font-bold">
          Şirkət tərəfindən keçirilən Tədbirlər
        </span>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event?.id}
            title={event?.title}
            photo={event?.photo}
            publishDate={event?.published_date}
          />
        ))}
      </div>
    </div>
  );
}

export default Company;
