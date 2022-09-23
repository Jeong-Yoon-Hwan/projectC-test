import React from "react";
import styled from "styled-components";
import Logo from "../components/logo";
import LoginForm from "../components/LoginForm";

const LoginBox = styled.div`
  width:400px;
  height:50vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:22px;

`;

const LoginArea = () =>{
  return(
    <>
      <LoginBox>
        <Logo/>
        <LoginForm/>
      </LoginBox>
    </>
  )
}
export default LoginArea;