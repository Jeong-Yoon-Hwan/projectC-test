import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";


const LoginBox = styled.div`
  width:230px;
  height:max-content;
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
function getPostData(){
  axios.get("http://localhost:3001/users").then((response)=>{
    console.log(response.data);
  })
}getPostData();


//로그인 폼 작성
const LoginForm = () => {

  const [formData,setFormData] = useState({
    email:'',
    password:''
  })

  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:3001/login",{
      method:"POST",
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data=>console.log(data))
  }

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }

  return(
    <>
        <LoginBox>
        <form action="#" className="login-form" onSubmit={event=>handleSubmit(event)}>
          <input 
            type="text" 
            name="email" 
            placeholder="아이디를 입력하세요" 
            value={formData.email}
            onChange={event=>handleChange(event)}
          />
          <input 
            type="password" 
            name="password" 
            placeholder="비밀번호를 입력하세요" 
            value ={formData.password}
            onChange={event=>handleChange(event)}
          />
          <Button className= 'login-btn' type="submit">로그인</Button>
          </form>
          <Button type="button" >아이디 / 비밀번호찾기</Button>
          <Button type="button" color="none"><Link to="/register">회원가입</Link></Button>
        </LoginBox>
        
    </>
  )
}

export default LoginForm;