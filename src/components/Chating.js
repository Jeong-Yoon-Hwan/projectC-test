import React,{useRef,useState} from "react"
import styled from "styled-components"
import axios from "axios"
const ws = new WebSocket("ws://localhost:3001");

function sendMessage(){

}



const ChatingBox = styled.div`
  width:inherit ;
  height:90vh;
  
  & > main {
    width: inherit;
    height:calc(100% - 50px);
    background-color:#f1f1f1;
    display:flex;
    flex-direction:column;
    justify-content:end;
    overflow:hidden;
  }
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


  //서버에서 보낸 메세지 받기
  function receiveMessage(event){
    //채팅이 입력될 박스를 생성
    const chat = document.createElement("div")
    //메세지가 입력될요소를 생성
    const message = document.createTextNode(event.data)
    //메세지를 채팅박스에 추가
    chat.appendChild(message)
    //채팅박스-->메인박스 초기화
    const chatBox = document.querySelector("main");
    //채팅박스에 chat 추가함
    chatBox.appendChild(chat)
  }ws.onmessage = receiveMessage //서버에 데이터가 전송되었을때 함수 실행





  const inputRef = useRef();
  const clearInput = () =>{
    inputRef.current.value="";
  }

  const token = localStorage.getItem("token");

  const Box = useRef("");

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


  const onSubmit = () =>{  
    if(inputValue.chat === ""){
      alert("채팅 안치셨어요");
    }else{
    let newBox = document.createElement('div');
    newBox.textContent=`${inputValue.chat}`; //new Box에 채팅 인풋에 입력한 값으로 추가
    newBox.style.backgroundColor="#F2DA46";
    newBox.style.borderRadius="20px 20px 0px 20px";
    newBox.style.padding ="10px";
    newBox.style.margin="10px";
    newBox.style.width="max-content";
    newBox.style.maxWidth="200px";
    newBox.style.height="max-content";
    newBox.style.fontWeight="bold";
    newBox.style.fontSize="14px";
    newBox.style.display="flex";
    newBox.style.alignItems="center";
    newBox.style.wordBreak="break-all";
    Box.current.appendChild(newBox);
    Box.current.style.display="flex";
    Box.current.style.flexDirection="column";
    Box.current.style.justifyContent="end";
    Box.current.style.alignItems="end";
    }
    clearInput();
    
  }

  const onEnter = (e) =>{
    if(e.key === "Enter"){
      onSubmit();
      clearInput();
    }
  }

  return(
    <ChatingBox>
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
        {/* <button onClick={onSubmit}>보내기</button> */}
        <button></button>
        
      </section>
    </ChatingBox>
    
  )

}


window.onload = ()=>{
  axios({
    url: 'http://localhost:5858/auth/inspect',
    method: 'POST',
    data: {
      nickname: localStorage.getItem("nickname"),
      token: localStorage.getItem("token")
    }
  }).then(function (response) { 
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
}




export default Chating;