import React from "react";
import CategoryTitle from "../components/titles/CategoryTitle";
import Hero from "../components//hero/Hero";
import MakeOwnEvent from "../components/eventCategories/MakeOwnEvent";
import UpComingEvents from "../components/eventCategories/UpComingEvents";
import TrendEvents from "../components/eventCategories/TrendEvents";
import LocalEvents from "../components/eventCategories/LocalEvents";

function Home() {
  return (
    <div className="space-y-10 py-5">
      <Hero />
      <CategoryTitle name={"Gələcək tədbirlər"} />
      <UpComingEvents />
      <MakeOwnEvent />
      <CategoryTitle name={"Trenddə olan tədbirlər"} />
      <TrendEvents />
      <CategoryTitle name={"Yerli tədbirlər"} />
      <LocalEvents />
    </div>
  );
}

export default Home;
