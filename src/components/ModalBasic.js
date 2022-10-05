import React from "react";
import styled from "styled-components";
import axios from "axios";
import useInput from "../hooks/useInput";


function ModalBasic({ setModalOpen }) {
    const closeModal = () =>{
      setModalOpen(false);
    }
    
    const password = useInput();
    const password_check = useInput();
    const email = useInput();


    function onSubmit(){
      if(password.value===""){
        alert("변경할 비밀번호를 입력하세요");
      }else if(password_check.value === ""){
        alert("변경할 비밀번호 확인을 입력하세요");
      }
      
    }

    return(
      <Container>
        <header>
          <div>회원정보 수정</div>
        </header>
        <main>
        <InputBox>
          <label>ID</label>
          <input 
            type="text"
            name="nickname"
            placeholder={localStorage.getItem("nickname")}
          />
        </InputBox>
        <InputBox>
          <label>PW</label>
          <input 
          type="password"
          name="password"
          placeholder="변경할 비밀번호 입력"
          value={password.value}
          onChange={password.onChange}
          />
          <input
          type="password"
          name="password_check"
          placeholder="변경할 비밀번호 확인"
          value={password_check.value}
          onChange={password_check.onChange}
          />
        </InputBox>
        <InputBox>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="이메일 입력"
            value={email.value}
            onChange={email.onChange}
          />
        </InputBox>
        </main>
        <footer>
            <button onClick={onSubmit}>확인</button>
            <button onClick={closeModal}>취소</button>
        </footer>
      </Container>
  )
}

export default ModalBasic;

const Container = styled.div`
  color:white;
  width:349px;
  height:500px;
  border: 0;
  z-index: 999;
  position : absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background-color: rgba(51,51,51,0.85);
  border-radius: 8px;
  
  //* 헤더
  & > header {
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:10%;
  }

  //* 메인
  & > main {
    width:100%;
    //background-color: #333;
  }

  & > footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:50px;
    gap:10px;
    padding:10px;
    & > button {
          width:100%;
          height:40px;
          background:#464BF2;
          color:white;
          border:0;
          border-radius:2px;
          font-weight:bold;
          
        }
  }
  
`
const InputBox = styled.div`
  width:100%;
  height:max-content;
  display:flex;
  flex-direction: column;
  gap:10px;
  padding:15px;

  & > input {
    width:100%;
    height:50px;
    padding:10px;
    border:0;
    border-radius: 2px;
  }
`