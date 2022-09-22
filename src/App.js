import React,{Component} from "react";
import Main from './layout/Main';
import SideArea from "./layout/SideArea.js";
import "./index.css";

const App = () =>{
    return (
      <>
        <section>
          <Main></Main>
        </section>
        <SideArea></SideArea>

      </>
    )
}

export default App;