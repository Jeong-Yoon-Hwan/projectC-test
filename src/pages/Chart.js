import React from "react";
import styled from "styled-components";
import io from "socket.io-client"

const socket = io.connect("http://localhost:3001");

const Chart = () => {
  const sendMessage = () =>{
    socket.emit("send_message",{message:"hello"})
  }
    return(
      <div> 
        메인차트
        <button onClick={sendMessage}>버튼</button>
      </div>
    )
  }

export default Chart;
