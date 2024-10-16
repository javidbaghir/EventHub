import { Typography } from "@mui/material";
import React from "react";
import PageTitle from "../components/titles/PageTitle";
import CreateEventForm from "../components/eventCategories/CreateEventForm";

function CreateEvent() {
  return (
    <div>
      <PageTitle title={"Öz tədbirini yarat"} />

      <CreateEventForm />
    </div>
  );
}

export default CreateEvent;
