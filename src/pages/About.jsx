import React, { useEffect, useState } from "react";
// import { getAboutData } from "../api/Api";
import { dbAboutPage } from "../fakedatabse/database";
import PageTitle from "../components/titles/PageTitle";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAboutData();

      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-[40px] p-[50px]">
      <PageTitle title={"Haqqımızda"} />

      <div className="flex flex-col justify-start space-y-4">
        {dbAboutPage.map((item, index) => (
          <div
            key={item.id}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`w-[400px] ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              <h3 className="text-[30px] text-btn">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
