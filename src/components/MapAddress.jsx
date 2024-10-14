import React from "react";

function MapAddress() {
  return (
   <div>
    <iframe
        width="400"
        height="250"
        style={{ border: "0" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12851.806250416084!2d49.8301716!3d40.3900006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d82b3b0c031%3A0xc11310c761bdb24!2sCity%20Point%20Baku!5e1!3m2!1saz!2saz!4v1728816765311!5m2!1saz!2saz`}
      ></iframe>
   </div>
  );
}

export default MapAddress;
