import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactUsForm() {
  const form = useRef();

  const validationSchema = Yup.object({
    name: Yup.string().required("Ad tələb olunur"),
    surname: Yup.string().required("Soyad tələb olunur"),
    email: Yup.string()
      .email("Düzgün email formatı deyil")
      .required("Email tələb olunur"),
    title: Yup.string().required("Başlıq tələb olunur"),
    message: Yup.string().required("Mesaj tələb olunur"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      title: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(
          "service_yc2m7g5",
          "template_5swurkr",
          form.current,
          "P703uwkrEiCP3caOr",
          {}
        )
        .then(
          (result) => {
            resetForm();
          },
          (error) => {
            alert("Mesaj göndərilmədi");
          }
        );
    },
  });

  return (
    <div>
      <form ref={form} onSubmit={formik.handleSubmit} action="submit">
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <TextField
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              id="outlined-basic"
              label="Ad"
              variant="outlined"
            />
            <TextField
              name="surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
              id="outlined-basic"
              label="Soyad"
              variant="outlined"
            />
          </div>

          <div className="flex flex-col space-y-5">
            <TextField
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              id="outlined-basic"
              type="email"
              label="Email"
              variant="outlined"
            />
            <TextField
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              id="outlined-basic"
              label="Başlıq"
              variant="outlined"
            />
            <TextField
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              id="outlined-multiline"
              label="Mesajınız"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <Button
            type="submit"
            style={{ backgroundColor: "#7848f4", color: "#FFFFFF" }}
            variant="contained"
          >
            Göndər
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
