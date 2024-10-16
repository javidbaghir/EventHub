import React from "react";
import CategoryTitle from "../components/CategoryTitle";
import Hero from "../components/Hero";
import MakeOwnEvent from "../components/MakeOwnEvent";
import UpComingEvents from "../components/UpComingEvents";
import TrendEvents from "../components/TrendEvents";
import LocalEvents from "../components/LocalEvents";

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
      <LocalEvents/>
    </div>
  );
}

export default Home;
