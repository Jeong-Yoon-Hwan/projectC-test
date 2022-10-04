import React from "react";
import Main from './layout/Main';
import SideArea from "./layout/SideArea.js";
import "./index.css";
import LoginArea from "./pages/LoginArea.js";
import axios from "axios";

const insertedToken = localStorage.getItem('token');


const auth = () =>{
  axios.post('http://localhost:5858/auth/inspect',
    {
      nickname:localStorage.getItem("nickname")
    },
    {
      headers :{
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  ).then((response)=>{
    console.log(response);
  }).catch((error)=>{
    console.log(error);
    localStorage.clear();
    location.reload();
  })
}

//페이지가 로드 되었을때 인증값 전송

if(insertedToken){
  window.onload = ()=>{ //새로고침 될때마다 실행
    auth();
  }

  let time = 1000 * 60 * 10 //10분마다 실행
  setTimeout ( function ()
    {
     auth();
    }, time );
  }else{

  }




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
          )
        }
        
      </>
    )
}

export default App;