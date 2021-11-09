//16.Node_16_express
const express=require('express');
const bodyParser = require('body-parser')
const app= express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.get('/',(request,response)=>{
	response.send("I am a full stack web application Developer");
})
app.get('/about',(request,response)=>{
response.json({name:"Abu Al Shahriar rifat",university:"University of Sharda"},)
})
app.post('/log_in',(request,response)=>{
 console.log(request.body.email);
 console.log(request.body.password);
 response.send("The account is logging succesfully");
})
app.listen(3001,()=>console.log('Server is running at port 3001'));