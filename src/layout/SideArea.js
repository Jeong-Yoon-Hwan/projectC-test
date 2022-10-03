import React from 'react';
import styled from 'styled-components';
import Logo from '../components/logo';
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom';
import Chating from '../components/Chating';
import { AnimatePresence } from 'framer-motion';

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
      
      <AnimatePresence>
        <Chating/>
        
      </AnimatePresence>
    </MainBox>
    
  )
}

export default SideArea;