//로고

import React from "react";
import styled from "styled-components";
import "../../src/index.css"

const LogoBox = styled.div`
  width:230px;
  height:10vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Logo = () =>{
  return(
    <LogoBox>
      <h1 className="logo-font">Happy Bot & Chat</h1>
    </LogoBox> 
  )
}
  
export default Logo;