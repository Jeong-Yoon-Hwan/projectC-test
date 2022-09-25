import React from 'react';
import styled from 'styled-components';
import LoginArea from '../pages/LoginArea';
import LoginForm from '../components/LoginForm';
import Logo from '../components/logo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from '../components/SignUp';

const MainBox = styled.div`
  width:400px;
  height:inherit;
  background:#333;
  display:flex;
  flex-direction:column;
  justify-conetnet:center;
  align-items:center;
`


const SideArea = () =>{
  return(
    <MainBox>
      <Logo/>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<LoginForm/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>

      </BrowserRouter>
    </MainBox>
    
  )
}

export default SideArea;