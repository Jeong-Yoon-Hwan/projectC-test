import React,{Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

import Main from './Main';
import ChatArea from "./ChatArea.js";
import Header from "./Header.js";
import "./index.css";

const App = () =>{
    return (
      <>
          <Main>
          </Main>
          <ChatArea></ChatArea>
      </>
    )
}

export default App;