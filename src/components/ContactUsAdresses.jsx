import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
// import { getAddressData } from "../api/Api";
import { contactUsData } from "../fakedatabse/database";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MapAddress from "./MapAddress";

function ContactUsAdresses() {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getAddressData();
  //       setData(data);
  //     };

  //     fetchData();
  //   });

  return (
    <div>
      {contactUsData.map((item) => (
        <div key={item.id} className="space-y-4">
          <div className="flex items-center gap-5">
            <FaLocationDot className="text-[20px]" />
            <span className="text-[20px]">
              {item.country}, {item.city}, {item.street}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <FaPhoneAlt />
            <span className="text-[20px]">{item.phone}</span>
          </div>

          <div className="flex items-center gap-5">
            <MdEmail />
            <span className="text-[20px]">{item.email}</span>
          </div>
          <MapAddress />
        </div>
      ))}
    </div>
  );
}

export default ContactUsAdresses;
