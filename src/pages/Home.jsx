import React from "react";
import CategoryTitle from "../components/titles/CategoryTitle";
import Hero from "../components//hero/Hero";
import MakeOwnEvent from "../components/eventCategories/MakeOwnEvent";
import EventCategorySection from "../components/eventCategories/eventCategorySection";

function Home() {
  return (
    <div className="space-y-10 py-5">
      <Hero />
      <CategoryTitle name={"Gələcək tədbirlər"} />
      <EventCategorySection
        url={`https://all-api.bitcode.az/api/news?limit=6&category=economy`}
      />
      <MakeOwnEvent />
      <CategoryTitle name={"Trenddə olan tədbirlər"} />
      <EventCategorySection
        url={`https://all-api.bitcode.az/api/news?limit=3&category=world`}
      />
      <CategoryTitle name={"Yerli tədbirlər"} />
      <EventCategorySection
        url={`https://all-api.bitcode.az/api/news?limit=3&category=world`}
      />
    </div>
  );
}

export default Home;
