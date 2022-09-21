import React from "react";
import styled from "styled-components";



const LoginBox = styled.div`
  width:230px;
  height:286px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:22px;
`;

//텍스트 박스 스타일 정의
const InputBox = styled.input`
  width:228px;
  height:44px;
  background:white;
  border-radius:2px;
  border:none;
  outline:none;
  padding:10px;
`
const Button = styled.button`
  width:228px;
  height:44px;
  background:${props => props.color || "#464BF2"};
  color:white;
  border:0;
  border-radius:2px;
  font-weight:bold;
`

const LoginHandle= (event) =>{
  
  const id = document.getElementById("id").value;
  const pw = document.getElementById('password').value;
  alert(`아이디: ${id}, 비밀번호: ${pw}`);
 
  
  
}


//로그인 폼 작성
const LoginForm = () => {
  return(
    <form name="LoginForm" onSubmit={LoginHandle}>
      <LoginBox>
        <InputBox type="text" id="id" name="id" placeholder="아이디를 입력하세요" autocomplete />
        <InputBox type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" autocomplete />
        <Button type="submit">로그인</Button>
        <Button>아이디 / 비밀번호찾기</Button>
        <Button color="none">회원가입</Button>
      </LoginBox>
    </form>
  )
}

export default LoginForm;