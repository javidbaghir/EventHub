import { Container } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container className="flex-grow">
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default AppLayout;
