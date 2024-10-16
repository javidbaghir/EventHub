import React from "react";
import ContactUsForm from "../components//contactUs/ContactUsForm";
import ContactUsAdresses from "../components//contactUs/ContactUsAdresses";
import PageTitle from "../components//titles/PageTitle";

function ContactUs() {
  return (
    <div>
      <PageTitle title={"Bizimlə Əlaqə"} />

      <div className="flex p-20 gap-10">
        <ContactUsForm />
        <div className="border-r border-[#7c7c7c]"></div>
        <ContactUsAdresses />
      </div>
    </div>
  );
}

export default ContactUs;
