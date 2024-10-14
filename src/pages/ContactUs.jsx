import React from "react";
import ContactUsForm from "../components/ContactUsForm";
import ContactUsAdresses from "../components/ContactUsAdresses";
import PageTitle from "../components/PageTitle";

function ContactUs() {
  return (
    <div>

     <PageTitle title={"Bizimlə Əlaqə"}/>


      <div className="grid grid-cols-2 p-20 gap-10">
        <ContactUsForm />
        {/* <div className="border-r"></div> */}
        <ContactUsAdresses />
      </div>
    </div>
  );
}

export default ContactUs;
