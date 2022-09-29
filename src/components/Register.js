import React,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const SinUpBox = styled.div`
  width:230px;
  height:max-content;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

    input{
      width:228px;
      height:44px;
      margin-bottom:22px;
      padding:10px;
      border:0;
      border-radius:2px;
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

const Register = () =>{

  const [inputValue,setInputValue] = useState({
    userId:'',
    userName:'',
    password:'',
    email:'',
  })

  const inputChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name] : e.target.value
    })
  }

  const doSignUp = async () =>{
    
    axios({
      url: "http://localhost:3001/users",
      method : "POST",
      data: {
        userId : inputValue.userId,
        password : inputValue.password,
        email : inputValue.email,
        userName : inputValue.userName
      }
    }).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error);
    })
  }

  return (
    <SinUpBox>
      <form>
        <input type="text" 
              name="userName"
              placeholder="이름"
              onChange={inputChangeHandler}/>
        <input type="text" 
              name="userId"
              placeholder="아이디"
              onChange={inputChangeHandler}/>
        <input type="text" 
              name="password"
              placeholder="비밀번호"
              onChange={inputChangeHandler}/>
        
        <input type="text"
              name="email"
              placeholder="이메일"
              onChange={inputChangeHandler}/>
        <button onClick={doSignUp}>가입하기</button>
      </form>
      <button><Link to ="/">로그인 페이지로 돌아가기</Link></button>
    </SinUpBox>
  )
}

export default Register;