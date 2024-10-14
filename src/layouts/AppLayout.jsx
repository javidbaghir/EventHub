import { Container } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout({ children }) {
  return (
    <>
      <Container>
        <Header />
        <div>{children}</div>
      </Container>
      <Footer/>
    </>
  );
}

export default AppLayout;
