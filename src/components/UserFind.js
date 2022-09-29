//아이디 비밀번호 찾기

import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom";
import {motion} from "framer-motion"

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
`

const UserFind = () =>{
  return(
    <motion.div
      className="registerPage"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
    <FindForm>
      <input type="text" placeholder="이름"/>
      <input type="text" placeholder="이메일"/>
      <p>이름과 이메일을 입력하세요 </p><br></br>
      <button>아이디 / 비밀번호 찾기</button>
      <button><Link to="/">로그인 화면으로 돌아가기</Link></button>
    </FindForm>
    </motion.div>
  )
}

export default UserFind;