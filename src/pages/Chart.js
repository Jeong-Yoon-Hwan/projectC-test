import React from "react";
import styled from "styled-components";
import io from "socket.io-client"



const Chart = () => {

const socket = io.connect("http://localhost:8080");

const sendMessage = () =>{
  
  socket.emit("message","hi");
}

  return(
    <div> 
      메인차트
      <button onClick={sendMessage}>버튼</button>
    </div>
  )
}

export default Chart;
