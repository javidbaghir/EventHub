import { Container } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function AppLayout({ children }) {
  return (
    <>
      <Container>
        <Header />
        <div>{children}</div>
      </Container>
      <Footer />
    </>
  );
}

export default AppLayout;
