import React from "react";
import CategoryTitle from "../components/titles/CategoryTitle";
import Hero from "../components//hero/Hero";
import MakeOwnEvent from "../components/eventCategories/MakeOwnEvent";
import EventCategorySection from "../components/eventCategories/eventCategorySection";
import SearchInput from "../components/search/SearchInput";
import Companies from "../components/Companies";

function Home() {
  return (
    <div className="space-y-10 py-5">
      <Hero />
      <SearchInput />
      <EventCategorySection
        category={'economy'} title="Gələcək tədbirlər"
      />
      <CategoryTitle name={"Təşkilatçı Şirkətlər"} />
      <Companies />
      <MakeOwnEvent />
      <EventCategorySection
        category={'world'} title={"Trenddə olan tədbirlər"}
      />
      <EventCategorySection
        category={'politics'} title="Yerli tədbirlər"
      />
    </div>
  );
}

export default Home;
