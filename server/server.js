const express = require("express");
const cors = require("cors");
const PORT = 4000;

const app = express()
app.use(cors()) 
//4000번으로 포트 생성
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

app.post("/test",(request,response)=>{
  response.send("hello boy!")
})