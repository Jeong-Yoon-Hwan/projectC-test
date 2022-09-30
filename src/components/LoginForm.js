//로그인폼

import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { motion } from "framer-motion"


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
    border:0;
    border-radius:2px;
  }
`;

const Button = styled.button`
  width:228px;
  height:44px;
  background:${props => props.color || "#464BF2"};
  color:white;
  border:0;
  border-radius:2px;
  font-weight:bold;
`

//로그인 폼 작성
const LoginForm = () => {

  const [formData,setFormData] = useState({
    nickname:'',
    password:''
  })

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }


  //아이디 비밀번호 값 보내기
  function handleSubmit(event){
    event.preventDefault();

    if(formData.nickname===""||formData.password===""){
      alert("아이디와 비밀번호가 입력되지 않았습니다");
    }
    axios({
      url: 'http://localhost:5858/auth/login',
      method: 'POST',
      data: {
        nickname: formData.nickname,
        password:formData.password	
      }
    }).then(function (response) { 
      console.log(response.data.token)

      //* 로그인 성공하면 token,nickname 받아와서 로컬스토리지에 저장함//
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("nickname",response.data.nickname);
      location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });

    

  }

  return(
    <motion.div
    className="registerPage"
    initial={{opacity:0}}
    animate={{opacity:1,transition:"2s"}}
    exit={{opacity:0}}
    >
        <LoginBox>
        <form action="#" className="login-form" onSubmit={event=>handleSubmit(event)}>
          <input 
            type="text" 
            name="nickname" 
            placeholder="아이디를 입력하세요" 
            value={formData.nickname}
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
          <Button type="button"><Link to="/userFind">아이디 / 비밀번호찾기</Link></Button>
          <Button type="button" color="none"><Link to="/signUp">회원가입</Link></Button>
          
        </LoginBox>
      </motion.div>
    
  )
}




export default LoginForm;