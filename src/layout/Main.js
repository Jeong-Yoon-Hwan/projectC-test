import React from 'react';
import {Link,Route,Routes,BrowserRouter} from "react-router-dom";
import Header from '../components/Header.js';
import styled from 'styled-components';
import Chart from '../pages/Chart.js';
import News from '../pages/News.js';
import Trading from '../pages/Trading.js';
import Info from '../pages/Info.js';
import Board from '../pages/board.js';

const MainBox = styled.div`
  width:calc(100vw - 400px); 
  height:90vh; 
  background-color:white;

`;

function getPostData(){
  const xhr = new XMLHttpRequest();
  
  xhr.open("GET",'http://localhost:3001/login');
  xhr.setRequestHeader("content-type","application/json");
  xhr.send();

  xhr.onload = () =>{
    if(xhr.status ===200){
      const res = JSON.parse(xhr.response);
      console.log(res);
      
    }else{
      console.log(xhr.status, xhr.statusText);
    }
  }
}getPostData();


const Main = (props) => {
	return (
      <BrowserRouter>
      {/* 헤더 고정 */}
        <Header/> 
      {/* 메인박스 지정하고 라우터 설정 */}
        <MainBox>
          <Routes>
            <Route path="/" element={<Chart/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/trading" element={<Trading/>}></Route>
            <Route path="/info" element={<Info/>}></Route>
            <Route path="/board" element={<Board/>}></Route>
          </Routes>
        </MainBox>
      </BrowserRouter>
    
	);
};




export default Main;
