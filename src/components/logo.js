//로고

import React from "react";
import styled from "styled-components";
import "../../src/index.css"

const LogoBox = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

const Button = styled.div`
  display:flex;
  width:max-content;
  height:max-content;
  padding:10px;
  background:${props => props.color || "#464BF2"};
  color:white;
  border:0;
  border-radius:2px;
  font-weight:bold;
  align-self:start;
  position:absolute;
  right:0;
  cursor:pointer;
  justify-content:center;
  align-items:center;
  font-size:13px;

    & > div{
      width: 0px;
      height: 0px;
      border-top: 10px solid white;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-radius:2px;
    }
`
const nickname = localStorage.getItem("nickname");

const Logo = () =>{
  return(
      <LogoBox>
        <h1 className="logo-font">Happy Bot & Chat</h1>
        <Button color="none">{nickname}
        <div className="dropdown-content">
        </div>
        
        </Button>
      </LogoBox> 
  )
}
  
export default Logo;