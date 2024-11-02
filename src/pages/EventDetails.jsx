import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import EventDetailsHero from "../components/hero/EventDetailsHero";
import EventDetailsBody from "../components/eventCategories/EventDetailsBody";
import CategoryTitle from "../components/titles/CategoryTitle";
import EventCategorySection from "../components/eventCategories/eventCategorySection";
import RandomEvents from "../components/eventCategories/RandomEvents";

function EventDetails() {
  const { id } = useParams();

  const { data } = useFetch(`https://all-api.bitcode.az/api/news/show/${id}`);

  return (
    <div className="space-y-10 pb-10">
      <EventDetailsHero data={data} />
      <EventDetailsBody data={data} />
      <CategoryTitle name={""} />
      <RandomEvents
        title={"Bəyənə biləcəyiniz digər tədbirlər"}
      />
    </div>
  );
}

export default EventDetails;
