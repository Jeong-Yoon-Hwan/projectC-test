import React,{useRef,useState} from "react"
import styled from "styled-components"

const ChatingBox = styled.div`
  width:inherit ;
  height:90vh;
  
  & > main {
    width: inherit;
    height:calc(100% - 50px);
    background-color:#f1f1f1;
    display:flex;
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
        <button onClick={onSubmit}>보내기</button>
      </section>
    </ChatingBox>
    
  )

}

export default Chating;