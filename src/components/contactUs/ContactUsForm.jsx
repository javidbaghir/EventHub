import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "../../hooks/UseForm";
import { ApiPost } from "../../api/Api";

function ContactUsForm() {
  const { value, setField, handleSubmit, loading } = useForm({
    initialState: {
      name: "",
      surname: "",
      title: "",
      messsage: "",
    },

    onSubmit: async (value) => {
      const data = await ApiPost(
        "https://jsonplaceholder.typicode.com/posts/1",
        value
      );

      console.log(value)
      console.log(data);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} action="submit">
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <TextField
            name="name"
            value={value.name}
            onChange={(e) => setField("name", e.target.value)}
             id="outlined-basic" label="Ad" variant="outlined" />
            <TextField 
            name="surname"
            value={value.surname}
            onChange={(e) => setField("surname", e.target.value)}
            id="outlined-basic" 
            label="Soyad" variant="outlined" />
          </div>

          <div className="flex flex-col space-y-5">
            <TextField
              name="email"
              value={value.email}
              onChange={(e) => setField("email", e.target.value)}
              id="outlined-basic"
              type="email"
              label="Email"
              variant="outlined"
            />
            <TextField
            name="title"
            value={value.title}
            onChange={(e) => setField("title", e.target.value)}
             id="outlined-basic" label="Başlıq" variant="outlined" />
            <TextField
            name="message"
            value={value.message}
            onChange={(e) => setField("message", e.target.value)}
              id="outlined-multiline"
              label="Mesajınız"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <Button
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
