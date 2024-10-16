import { Typography } from "@mui/material";
import React from "react";

function PageTitle({ title }) {
  return (
    <div>
      <div className="flex justify-center">
        <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", color: "#7848f4" }}>
          {title}
        </Typography>
      </div>
    </div>
  );
}

export default PageTitle;
