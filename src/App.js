import React,{Component} from "react";
import Main from './layout/Main';
import SideArea from "./layout/SideArea.js";
import "./index.css";
import LoginArea from "./pages/LoginArea.js";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginForm from "./components/LoginForm.js";

const insertedToken = localStorage.getItem('token');

const App = () =>{
    return (
      <>

      {
      insertedToken ? (
        <>
          <section>
            <Main></Main>
          </section>
          <SideArea/>
          {/* {insertedToken ? (<SideArea/>):(null)} */}
        </>):(
          <>
            <LoginArea/>
          </>

        )}
        
      </>
    )
}

export default App;