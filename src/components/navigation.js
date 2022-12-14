//네비게이션

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Ul 스타일지정
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
    {/* 링크 값 입력되면 라우터 페이지에서 받아서 처리됨 */}
      <Ul>
        <li><Link to="/">거래소</Link></li>
        <li><Link to="/trading">자동매매설정</Link></li>
        <li><Link to="/info">투자내역</Link></li>
        <li><Link to="/news">뉴스</Link></li>
        <li><Link to="/board">게시판</Link></li>
        <li><a href="http://localhost:5858/player">영상</a></li>
      </Ul>
    </>
  )
}

export default Navigation;