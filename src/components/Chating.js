import React,{useRef,useState} from "react"
import styled from "styled-components"
import axios from "axios"
const ws = new WebSocket("ws://localhost:3001");


let state = "";
console.log(state);


const MainBox = styled.div`
  width:inherit ;
  height:90vh;
  
  //메인채팅창//
  & > main {
    width: inherit;
    height:calc(100% - 50px);
    background-color:#f1f1f1;
    display:flex;
    flex-direction:column;
    justify-content:end;
    overflow:hidden;

      //전체 채팅박스
      & > div {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:end; 
      }

      //개별 채팅박스
        & > div > div {
          /* width:max-content;
          height:max-content;
          max-width:200px;
          //background-color:#F2DA46;
          background-color: ${state ? "yellow" : "black"};
          font-weight:bold;
          font-size:14px;
          display:flex;
          align-items:center;
          justify-content:end;
          word-break:break-all;
          border-radius:20px 20px 0px 20px;
          padding:10px;
          margin:10px; */
        }
  }

//채팅 입력칸
  & > section{
    width:inherit;
    height:50px;
    background-color:white;
    box-shadow: 0 -4px 4px #f1f1f1;
    display:flex;
    align-items:center;
    justify-content:end;

      & > input {
        border:0;
        padding:10px;
        outline:none;
        width:90%;
        height:inherit;
      }

      & > button {
        width:80px;
        height:50px;
        background-color:#464BF2;
        color:white;
        border:0;
        border-radius:2px;
        font-weight:bold;
      }
  }
`

const Chating = () => {

  const inputRef = useRef();
  const clearInput = () =>{
    inputRef.current.value="";
  }

  const Box = useRef("");
  const Box2 = useRef("");

  
  //서버에서 보낸 메세지 받기
  function receiveMessage(event){
    //채팅이 입력될 박스를 생성
    const chat = document.createElement("div")
    //메세지가 입력될요소를 생성
    const msg = JSON.parse(event.data); //msg에 data를 JSON객체로 받아옴.
    const message = document.createTextNode(msg.text)
    
    chat.style.width="max-content";
    chat.style.maxWidth="200px";
    chat.style.height="max-content";

    if(msg.user===localStorage.getItem("nickname")){
      chat.style.backgroundColor="#F2DA46";
      chat.style.borderRadius="20px 20px 0px";
    }else{
      chat.style.backgroundColor="#4BDB87";
      chat.style.alignSelf="start";
      chat.style.borderRadius="20px 20px 20px 0px";
    }
    chat.style.display="flex";
    chat.style.flexDirection="column";
    chat.style.justifyContent="end";
    chat.style.alignItems="center";
    chat.style.fontWeight="bold";
    chat.style.fontSize="14px";
    chat.style.wordBreak="break-all";
    
    chat.style.padding="10px";
    chat.style.margin="10px";
  
    //메세지를 채팅박스에 추가
    chat.appendChild(message);
    //채팅박스-->메인박스 초기화
    const chatBox = document.querySelector("main");
    //채팅박스에 chat 추가함
    Box.current.appendChild(chat)
    //chatBox.appendChild(chat);
  }ws.onmessage = receiveMessage //서버에 데이터가 전송되었을때 함수 실행


  //채팅 입력값 useState로 상태 관리
  const [inputValue,setInputValue] = useState({
    chat : ''
  })
  const inputChange = (e) =>{
    const {name, value} = e.target
    setInputValue({
      ...inputValue,
      [name]:value,
    })
  }


  //보내기 버튼 눌렀을때 채팅내용 담은 박스 생성
  const onSubmit = () =>{  
    //인풋에 입력한 값을 message로 전송
    const message = inputValue.chat;
    state = true;
    console.log(state);
    const msg = {
      type:"message",
      text:message,
      user: localStorage.getItem("nickname")
    }
    ws.send(JSON.stringify(msg));

    if(inputValue.chat === ""){
      alert("채팅 안치셨어요");
    }else{
    
    }
    
    clearInput();
  }
//엔터키를 눌렀을때 submit 입력
  const onEnter = (e) =>{
    if(e.key === "Enter"){
      onSubmit();
      clearInput();
    }
  }

  return(
    
    <MainBox>
      <main id="chatBox">
        <div ref={Box}></div>
      </main>
      <section>
        <input 
          id="chat"
          type="text"
          name="chat"
          onChange={inputChange}
          onKeyUp={onEnter}
          ref={inputRef}
        />
        <button onClick={onSubmit}>보내기</button>
        {/* <button></button> */}
        
      </section>
    </MainBox>
    
  )
}




export default Chating;