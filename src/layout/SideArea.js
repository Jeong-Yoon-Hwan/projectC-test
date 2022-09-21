import React from 'react';
import styled from 'styled-components';
import LoginArea from '../pages/LoginArea';

const MainBox = styled.div`
  width:400px;
  height:inherit;
  background:#333;
  display:flex;
  flex-direction:column;

`

const SideArea = () =>{
  return(
    <MainBox>
      <LoginArea></LoginArea>
    </MainBox>
  )
}

export default SideArea;