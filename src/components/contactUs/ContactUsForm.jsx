import { Button, TextField } from "@mui/material";
import React from "react";

function ContactUsForm() {
  return (
    <div>
      <form action="submit">
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <TextField id="outlined-basic" label="Ad" variant="outlined" />
            <TextField id="outlined-basic" label="Soyad" variant="outlined" />
          </div>

          <div className="flex flex-col space-y-5">
            <TextField
              id="outlined-basic"
              type="email"
              label="Email"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Başlıq" variant="outlined" />
            <TextField
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
