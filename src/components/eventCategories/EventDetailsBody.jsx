import React from "react";
import CategoryTitle from "../titles/CategoryTitle";
import MapAddress from "../map/MapAddress";
import { Link } from "react-router-dom";
import moment from "moment";

function EventDetailsBody({ data }) {
  const { content, published_date, seo_link } = data;

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-[90px] px-10">
      <div className="space-y-5">
        <div>
          <CategoryTitle name={"Ətraflı"} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: content }} />

        <div>
          <CategoryTitle name={"Tədbir Tarixi"} />
        </div>

        <div>
          <p>Tarix: {moment(published_date).format("ll")}</p>
          <p>Saat: {moment(published_date).format("LT")}</p>
        </div>

        <div>
          <CategoryTitle name={"Təşkilatçı Şirkət"} />
        </div>

        <div className="flex items-center gap-x-5">
          <div>
            <figure className="size-[60px] rounded-full overflow-hidden">
              <img
                className="size-full object-cover"
                src={data?.author?.photo}
                alt=""
              />
            </figure>
          </div>
          <Link to={`/company/${data?.author?.slug}`}>
            {data?.author?.slug ? data?.author?.slug : "Təşkilatçı məlum deyil"}
          </Link>
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
          <Link target="blank" to={seo_link}>
            <figure className="size-[30px]">
              <img
                className="object-cover size-full"
                src="../../public/fbicon.png"
                alt=""
              />
            </figure>
          </Link>

          <Link target="blank" to={seo_link}>
            <figure className="size-[30px]">
              <img
                className="object-cover size-full"
                src="../../public/wpicon.png"
                alt=""
              />
            </figure>
          </Link>

          <Link target="blank" to={seo_link}>
            <figure className="size-[30px]">
              <img
                className="object-cover size-full"
                src="../../public/linkedin.png"
                alt=""
              />
            </figure>
          </Link>

          <Link target="blank" to={seo_link}>
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
