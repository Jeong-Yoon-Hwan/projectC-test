import styled from "styled-components"
import React from "react"

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

const InputBoxs = (props) =>{
  return(
    <>
      <InputBox placeholder={props.text}></InputBox>
    </>
  )
}

export default InputBoxs;