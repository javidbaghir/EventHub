import React from "react";

function MapAddress({ src }) {
  return (
    <div>
      <iframe
        width="370"
        md:width="400"
        height="250"
        style={{ border: "0" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
      ></iframe>
    </div>
  );
}

export default MapAddress;
