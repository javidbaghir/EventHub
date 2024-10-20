import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import PageTitle from "../titles/PageTitle";
import { Input } from "postcss";

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
          <TextField
            fullWidth
            id="outlined-basic"
            label="Təşkilatçı Şirkət"
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

        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">Qiymət</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type="number"
            startAdornment={<InputAdornment position="start">₼</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <TextField
          placeholder="Tədbir haqqında detalları qeyd edin"
          fullWidth
          multiline
          maxRows={4}
        />

        <TextField fullWidth type="file" />

        <div className="flex justify-center">
          <Button
            style={{ backgroundColor: "#7848f4", color: "#FFFFFF" }}
            variant="contained"
          >
            Göndər
          </Button>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default CreateEventForm;
