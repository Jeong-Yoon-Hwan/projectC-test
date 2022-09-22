import React from "react";
import styled from "styled-components";
import "../../src/index.css"

const LogoBox = styled.div`
  width:230px;
  height:60px;
  display:flex;
  justify-content:center;
  align-items:end;
`;

const Logo = () =>{
  return(
    <LogoBox>
      <h1 className="logo-font">Happy Bot & Chat</h1>
    </LogoBox> 
  )
}
  
export default Logo;