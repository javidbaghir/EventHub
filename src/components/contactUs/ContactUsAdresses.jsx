import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
// import { getAddressData } from "../api/Api";
import { contactUsData } from "../../fakedatabse/database";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MapAddress from "../map/MapAddress";

function ContactUsAdresses() {
  return (
    <div>
      {contactUsData.map((item) => (
        <div key={item?.id} className="space-y-4">
          <div className="flex items-center gap-5">
            <FaLocationDot className="text-[20px]" />
            <span className="text-[20px]">
              {item?.country}, {item?.city}, {item?.street}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <FaPhoneAlt />
            <span className="text-[20px]">{item?.phone}</span>
          </div>

          <div className="flex items-center gap-5">
            <MdEmail />
            <span className="text-[20px]">{item?.email}</span>
          </div>
          <MapAddress
            src={
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48621.61153544785!2d49.830172!3d40.390001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d82b3b0c031%3A0xc11310c761bdb24!2sCity%20Point%20Baku!5e0!3m2!1saz!2saz!4v1729100002913!5m2!1saz!2saz"
            }
          />
        </div>
      ))}
    </div>
  );
}

export default ContactUsAdresses;
