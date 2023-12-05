const express=require("express")
const Mock=require("mockjs")
const loginRes=require("./common/login.json")
const port=3001
const app=express()


app.post("/sys/login",(require,response)=>{
	response.json(Mock.mock(loginRes))
})

app.listen(port, ()=>{
	console.log(`原神启动${port}`);
})

