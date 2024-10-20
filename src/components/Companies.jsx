import { Button } from "@mui/material";
import React from "react";
import useFetch from "../hooks/UseFetch";
import { Link } from "react-router-dom";

function Companies() {
  const { data: companies } = useFetch(
    `https://all-api.bitcode.az/api/authors?random=true`
  );

  return (
    <div className="flex gap-8 overflow-x-auto pb-10">
      {companies.map((company) => (
        <div
          key={company.id}
          className="flex flex-col items-center justify-center h-full min-h-[250px] bg-[#E0E0E0] py-7 px-10 p space-y-6 rounded-xl "
        >
          <figure className="size-[80px] rounded-full overflow-hidden">
            <img
              className="size-full object-cover"
              src={company.photo}
              alt={company.fullname}
            />
          </figure>
          <div className="text-center">
            <span className="font-bold text-[16px]">{company.fullname}</span>
          </div>

          <div className="mt-auto">
            <Link
              className="px-5 py-2 bg-btn text-white rounded-lg"
              to={`/company/${company.slug}`}
            >
              Ətraflı
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Companies;
