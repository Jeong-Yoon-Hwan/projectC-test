import React,{Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

import Main from './layout/Main';
import SideArea from "./layout/SideArea.js";
import Header from "./components/Header.js";
import "./index.css";

const App = () =>{
    return (
      <>
          <Main>
          </Main>
          <SideArea></SideArea>
      </>
    )
}

export default App;