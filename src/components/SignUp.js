import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SinUpBox = styled.div`
  width:230px;
  height:500px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

    input{
      width:228px;
      height:44px;
      margin-bottom:22px;
      padding:10px;
    }
    button{
      width:228px;
      height:44px;
      background:${props => props.color || "#464BF2"};
      color:white;
      border:0;
      border-radius:2px;
      font-weight:bold;
      margin-bottom:22px;
    }
`;



const SingUp = () =>{
  return (
    <SinUpBox>
      <form>
        <input type="text" placeholder="이름"/>
        <input type="text" placeholder="아이디"/>
        <input type="text" placeholder="비밀번호"/>
        <input type="text" placeholder="비밀번호 확인"/>
        <input type="text" placeholder="이메일"/>
        <button type="submit">가입하기</button>
      </form>
      <button><Link to ="/">로그인 페이지로 돌아가기</Link></button>
    </SinUpBox>
  )
}

export default SingUp;