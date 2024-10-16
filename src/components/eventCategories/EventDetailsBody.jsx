import React from "react";
import CategoryTitle from "../titles/CategoryTitle";
import MapAddress from "../map/MapAddress";
import { Link } from "react-router-dom";

function EventDetailsBody({ data }) {
  const { content, published_date } = data;

  return (
    <div className="grid grid-cols-2 gap-[90px] px-10">
      <div className="space-y-5">
        <div>
          <CategoryTitle name={"Ətraflı"} />
        </div>

        <div>{content}</div>

        <div>
          <CategoryTitle name={"Saat"} />
        </div>

        <div>{published_date}</div>

        <div>
          <CategoryTitle name={"Təşkilatçı Şirkət"} />
        </div>

        <div>
          {data?.author?.agency ? data.author.agency : "Təşkilatçı məlum deyil"}
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <CategoryTitle name={"Tədbir Məkanı"} />
        </div>
        <div>
          <MapAddress
            src={
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12154.050808371843!2d49.8654521!3d40.3974915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d412c43d539%3A0x294c20fed11538be!2zQmFrxLEgS29ucXJlcyBNyZlya8mZemk!5e0!3m2!1saz!2saz!4v1729099947022!5m2!1saz!2saz"
            }
          />
        </div>

        <div>
          <CategoryTitle name={"Etiketlər"} />
        </div>

        <div className="flex flex-wrap gap-5">
          <span className="p-[10px] rounded-md bg-tagBg text-black">Event</span>
          <span className="p-[10px] rounded-md bg-tagBg text-black">
            Seminar
          </span>
          <span className="p-[10px] rounded-md bg-tagBg text-black">Party</span>
          <span className="p-[10px] rounded-md bg-tagBg text-black">Baku</span>
        </div>

        <div>
          <CategoryTitle name={"Dostlarınla Paylaş"} />
        </div>

        <div className="flex gap-3">
          <Link to={"/"}>
            <figure className="size-[30px]">
              <img
                className="object-cover size-full"
                src="../../public/fbicon.png"
                alt=""
              />
            </figure>
          </Link>

          <Link to={"/"}>
            <figure className="size-[30px]">
              <img
                className="object-cover size-full"
                src="../../public/wpicon.png"
                alt=""
              />
            </figure>
          </Link>

          <Link to={"/"}>
            <figure className="size-[30px]">
              <img
                className="object-cover size-full"
                src="../../public/linkedin.png"
                alt=""
              />
            </figure>
          </Link>

          <Link to={"/"}>
            <figure className="size-[30px]">
              <img
                className="object-cover size-full"
                src="../../public/twitter.png"
                alt=""
              />
            </figure>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsBody;
