import React from 'react';
import styled from 'styled-components';
import LoginArea from '../pages/LoginArea';
import LoginForm from '../components/LoginForm';
import Logo from '../components/logo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from '../components/Register';
import Chating from '../components/Chating';

const MainBox = styled.div`
  width:400px;
  height:inherit;
  background:#333;
  display:flex;
  flex-direction:column;
  justify-conetnet:center;
  align-items:center;
  
`
const insertedToken = localStorage.getItem('token');

const SideArea = () =>{
  console.log(insertedToken);
  return(
    <MainBox>
      <Logo/>
      <BrowserRouter>
        <Routes>
          {insertedToken ? 
             <Route path ="/" element={<Chating/>}></Route>
             :<Route path ="/" element={<LoginForm/>}></Route>
          }
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </MainBox>
    
  )
}

export default SideArea;