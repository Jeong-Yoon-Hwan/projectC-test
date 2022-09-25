import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";


const LoginBox = styled.div`
  width:230px;
  height:400px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:22px;

  input{
    width:228px;
    height:44px;
    margin-bottom:22px;
    padding:10px;
  }
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

const Countet = () =>{
  const [value,setValue] = useState(0);
}


//로그인
function LoginHandle(e){
  e.preventDefault();
  
  const id = document.getElementById("id").value;
  const pw = document.getElementById('password').value;
  
  axios.get("http://localhost:3001/login").then((response)=>{
    console.log(response.data);
    if(response.data.find((mem)=> mem.id===id)){
      alert("일치합니다");
    }else{
      alert("틀렸습니다");
    }
  }).catch((error)=>{
    console.log(error);
  })
}

// function getPostData(){
//   axios.get("http://localhost:3001/login").then((response)=>{
//     console.log(response.data);
//   })
// }getPostData();



function test(){
  
}

//로그인 폼 작성
const LoginForm = () => {
  return(
   
    <>
     
        <LoginBox>
        <form action="#" name="LoginForm" onSubmit={LoginHandle}>
          <input 
            type="text" 
            id="id" 
            name="id" 
            placeholder="아이디를 입력하세요" 
            
          />
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="비밀번호를 입력하세요" 
          />
          <Button type="submit">로그인</Button>
          </form>
          <Button type="button" onClick={test}>아이디 / 비밀번호찾기</Button>
          <Button type="button" color="none"><Link to="/signUp">회원가입</Link></Button>
         
        </LoginBox>
        
    </>
   
  )
}

export default LoginForm;