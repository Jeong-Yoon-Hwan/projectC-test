//아이디 비밀번호 찾기

import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom";
import {motion} from "framer-motion"
import { useState } from "react";
import axios from "axios";

const FindForm = styled.div`
  width:230px;
  height:max-content;
    & > input {
      width:228px;
      height:44px;
      margin-bottom:22px;
      padding:10px;
    }
    & > p {
      color:white ;
      font-size:12px;
      text-align:center;
    }
    
    
`
const Button = styled.button`
  width:228px;
  height:44px;
  background:${props => props.color || "#464BF2"};
  color:white;
  border:0;
  border-radius:2px;
  font-weight:bold;
  margin-bottom:22px;  
`




const UserFind = () =>{

  const [formData,setFormData] = useState({
    name:"",
    email:"",
  })

  function handleChange(event){
    setFormData({
      ...formData,[event.target.name] : event.target.value
    })
    console.log(event.target.value);
  } 


  function handleSubmit(event){
    event.preventDefault();
    //이름과 이메일을 입력하여 회원정보 찾기
    if(formData.name === "" || formData.email === ""){
      alert("이름과 이메일이 입력되지 않았습니다")
    }

    axios({
      url:"http://localhost:3001/users",
      method:"GET",
    })
    .then((response)=>{
      if(response.data.find((data)=>data.userName===formData.name&&data.email===formData.email)){
        console.log("회원정보 일치");
      }else{
        console.log("회원정보 불일치")
      }
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  return(
    <motion.div
      className="registerPage"
      initial={{opacity:0}}
      animate={{opacity:1,transition:"2s"}}
      exit={{opacity:0}}
    >
    <FindForm>
      <input type="text" name="name" placeholder="이름"
        value={formData.name}
        onChange={(event)=>handleChange(event)}
      />
      <input type="text" name="email" placeholder="이메일"
        onChange={(event)=>handleChange(event)}
      />
      <p>* 이름과 이메일을 입력하세요 *  </p><br></br>
      <Button onClick={handleSubmit}>아이디 / 비밀번호 찾기</Button>
      <Button><Link to="/">로그인 화면으로 돌아가기</Link></Button>
    </FindForm>
    </motion.div>
  )
}

export default UserFind;