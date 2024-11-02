import React, { useEffect, useState } from "react";
// import { getAboutData } from "../api/Api";
import { dbAboutPage } from "../fakedatabse/database";
import PageTitle from "../components/titles/PageTitle";

function About() {

  return (
    <div className="space-y-[40px] p-[50px]">
      <PageTitle title={"Haqqımızda"} />

      <div className="flex flex-col justify-center md:justify-start md:space-y-4 space-y-[60px]">
        {dbAboutPage.map((item, index) => (
          <div
            key={item.id}
            className={`flex ${
              index % 2 === 0
                ? "md:justify-start justify-center"
                : "md:justify-end justify-center"
            }`}
          >
            <div
              className={`w-[400px] ${
                index % 2 === 0
                  ? "md:text-left text-center"
                  : "text-center md:text-right"
              }`}
            >
              <h3 className="text-[30px] text-btn">{item.title}</h3>
              <p>{item?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
