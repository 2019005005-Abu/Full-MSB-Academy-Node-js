//15.Node_15_express
const express=require('express');
const app= express();
app.get('/',(request,response)=>{
	response.send("I am a full stack web application Developer");
})
app.get('/about',(request,response)=>{
response.json({name:"Abu Al Shahriar rifat",university:"University of Sharda"},)
})
app.listen(3000,()=>console.log('Server is running at port 3000'));