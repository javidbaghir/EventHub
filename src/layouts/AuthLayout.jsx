import { Container } from "@mui/material";
import React from 'react'
import { Navigate } from 'react-router-dom';

function AuthLayout({children}) {
  const token = localStorage.token;

    if (token) return <Navigate to={'/'}/>

    return (
     <>
          <Container>
          <div>{children}</div>
          </Container>
     </>
    );
}

export default AuthLayout;