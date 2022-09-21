import styled, { css } from "styled-components";
import React from "react";

const Button = styled.button`
  width:228px;
  height:44px;
  background:${props => props.color || "#464BF2"};
  color:white;
  border:0;
  border-radius:2px;
  font-weight:bold;
`



const Buttons = (props) =>{
  return(
    <>
      <Button color={props.color}>{props.text}
      </Button>
    </>
  )
}

export default Buttons;