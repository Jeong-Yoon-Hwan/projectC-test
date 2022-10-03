//로고

import React,{useEffect, useState} from "react";
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
  position:absolute;
  right:0;
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

  & > ul {
    border-radius:5px;
    display:none;
    width:max-content;
    height:max-content;
    background-color:gray;
    padding:10px;
    justify-content:end;
    align-items:end;
    margin-top:5px;
    &>li:hover{
      color:#333;
    }
  }

  :hover{
    display:flex;
    flex-direction:column;
    justify-conetnet:end;
    align-items:end;
      ul{
        display:flex;
        flex-direction:column;
      }
  }
`
const nickname = localStorage.getItem("nickname");




const Logo = () =>{

  const logOut = () =>{
    localStorage.clear();
    location.reload();
  }
  return(
      <LogoBox>
        <h1 className="logo-font">Happy Bot & Chat</h1>
        <Button color="none">{nickname}
          <ul>
            <li>회원정보 수정</li>
            <li onClick={logOut}>로그아웃</li>
          </ul>
        </Button>
      </LogoBox> 
  )
}
  
export default Logo;