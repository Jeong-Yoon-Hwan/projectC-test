import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Ul = styled.ul`
  width:max-content;
  height:10vh;
  display:flex;
  justify-content:center;
  align-items:center;

  & > li {
    width:10vw;
    min-width:max-content;
    height:10vh;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:bold;
    text-decoration:none;
    
  }
`


const Navigation = () =>{
  return(
    <>
      <Ul>
        <li><Link to="/">거래소</Link></li>
        <li><Link to="/trading">자동매매설정</Link></li>
        <li><Link to="/info">투자내역</Link></li>
        <li><Link to="/news">뉴스</Link></li>
        <li><Link to="/board">게시판</Link></li>
      </Ul>
    </>
  )
}

export default Navigation;