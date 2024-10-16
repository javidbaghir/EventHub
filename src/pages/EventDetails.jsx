import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import EventDetailsHero from "../components/hero/EventDetailsHero";
import EventDetailsBody from "../components/eventCategories/EventDetailsBody";
import UpComingEvents from "../components/eventCategories/UpComingEvents";
import CategoryTitle from "../components/titles/CategoryTitle";

function EventDetails() {
  const { id } = useParams();

  const { data } = useFetch(`https://all-api.bitcode.az/api/news/show/${id}`);

  return (
    <div className="space-y-10 pb-10">
      <EventDetailsHero data={data} />
      <EventDetailsBody data={data} />
      <CategoryTitle name={"Bəyənə biləcəyiniz digər tədbirlər"} />
      <UpComingEvents />
    </div>
  );
}

export default EventDetails;
