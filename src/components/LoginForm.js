import React from "react";
import styled from "styled-components";
import InputBoxs from "./InputBox";
import Buttons from "./Buttons";

const LoginBox = styled.div`
  width:230px;
  height:286px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:22px;
`;




//로그인 폼 작성
const LoginForm = () => {
  return(
    <form>
      <LoginBox>
        <InputBoxs text="아이디를 입력하세요"/>
        <InputBoxs text="비밀번호를 입력하세요"/>
        <Buttons text="로그인"/>
        <Buttons text="아이디 / 비밀번호 찾기"/>
        <Buttons color="none" text="회원가입"/>
      </LoginBox>
    </form>
  )
}

export default LoginForm;