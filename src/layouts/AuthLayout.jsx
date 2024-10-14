import { Container } from "@mui/material";
import React from 'react'
import { Navigate } from 'react-router-dom';
import { useContextGlobal } from "../context/GlobalContext";

function AuthLayout({children}) {

  
  const {storage} = useContextGlobal();

    if (storage.token) return <Navigate to={'/'}/>

    return (
     <>
          <Container>
          <div>{children}</div>
          </Container>
     </>
    );
}

export default AuthLayout;