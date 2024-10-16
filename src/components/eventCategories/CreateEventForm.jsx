import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import PageTitle from "../titles/PageTitle";

function CreateEventForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="p-5 space-y-5">
        <div className="space-y-5">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Tədbirin adı"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Tədbir məkanı"
            variant="outlined"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <DateTimePicker
            label="Başlama zamanı"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DateTimePicker
            label="Bitmə zamanı"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>

        <PageTitle title={"Tədbir haqqında"} />
      </div>
    </LocalizationProvider>
  );
}

export default CreateEventForm;
