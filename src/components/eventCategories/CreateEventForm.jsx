import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useRef, useState } from "react";
import PageTitle from "../titles/PageTitle";
import { Input } from "@mui/material";
import useFetch from "../../hooks/UseFetch";
import { CREATEEVENTENDPOINT } from "../../api/CreateEventEndPoint";
import { useForm } from "../../hooks/UseForm";
import { DateTimeField } from "@mui/x-date-pickers";
import { ApiPost } from "../../api/Api";
import { useFormik } from "formik";
import * as Yup from "yup";

function CreateEventForm() {
  const form = useRef();
  const validationSchema = Yup.object({
    name: Yup.string().required("Tədbir adını qeyd edin"),
    venue: Yup.string().required("Tədbir məkanını qeyd edin"),
    company: Yup.string().required("Tədbir məkanını qeyd edin"),
    startDate: Yup.string().required("Tədbirin başlama tarixini qeyd edin"),
    endDate: Yup.string().required("Tədbirin bitmə tarixini qeyd edin"),
    desc: Yup.string().required("Tədbir haqqında detalları qeyd edin"),
    imgURL: Yup.string().required("Tədbirin şəkil linkini qeyd edin"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      venue: "",
      company: "",
      startDate: null,
      endDate: null,
      price: "",
      desc: "",
      imgURL: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (value, { resetForm }) => {
      const data = await ApiPost(CREATEEVENTENDPOINT.post, value);
      console.log(data);

      resetForm();
    },
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="p-5 space-y-5">
          <div className="space-y-5">
            <TextField
              id="outlined-basic"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              label="Tədbirin adı"
              variant="outlined"
            />
            <TextField
              fullWidth
              name="venue"
              value={formik.values.venue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.venue)}
              helperText={formik.touched.venue && formik.errors.venue}
              id="outlined-basic"
              label="Tədbir məkanı"
              variant="outlined"
            />
            <TextField
              fullWidth
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
              id="outlined-basic"
              label="Təşkilatçı Şirkət"
              variant="outlined"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <DateTimePicker
              label="Başlama Zamanı"
              value={formik.values.startDate}
              onBlur={formik.handleBlur}
              error={
                formik.touched.startDate && Boolean(formik.errors.startDate)
              }
              helperText={formik.touched.startDate && formik.errors.startDate}
              onChange={(newValue) => {
                if (newValue) {
                  formik.setFieldValue("startDate", newValue);
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />

            <DateTimePicker
              label="Bitmə zamanı"
              value={formik.values.endDate}
              onBlur={formik.handleBlur}
              error={formik.touched.endDate && Boolean(formik.errors.endDate)}
              helperText={formik.touched.endDate && formik.errors.endDate}
              onChange={(newValue) => {
                if (newValue) {
                  formik.setFieldValue("endDate", newValue);
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>

          <PageTitle title={"Tədbir haqqında"} />

          <FormControl fullWidth>
            <TextField
              id="outlined-adornment-amount"
              name="price"
              value={formik.values.price}
              onBlur={formik.handleBlur}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              onChange={formik.handleChange}
              type="number"
              label="Qiymət ₼"
            />
          </FormControl>
          <TextField
            placeholder="Tədbir haqqında detalları qeyd edin"
            value={formik.values.desc}
            name="desc"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.desc && Boolean(formik.errors.desc)}
            helperText={formik.touched.desc && formik.errors.desc}
            fullWidth
            multiline
            maxRows={4}
          />

          <TextField
            value={formik.values.imgURL}
            name="imgURL"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.imgURL && Boolean(formik.errors.imgURL)}
            helperText={formik.touched.imgURL && formik.errors.imgURL}
            fullWidth
            placeholder="Şəkil linkini əlavə et"
            type="text"
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              style={{ backgroundColor: "#7848f4", color: "#FFFFFF" }}
              variant="contained"
            >
              {/* {loading ? "Göndərilir..." : "Göndər"} */}
              Göndər
            </Button>
          </div>
        </div>
      </LocalizationProvider>
    </form>
  );
}
export default CreateEventForm;
