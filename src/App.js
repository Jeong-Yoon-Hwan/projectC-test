import React,{Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main';


const App = () =>{
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;