//18.Node_18_express
const express=require('express');
const bodyParser = require('body-parser')
const app= express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use((request,response,next)=>{
console.log(request.method);
console.log(request.protocol);
console.log(request.get('host'));
console.log(request.originalUrl);
next();
})
app.get('/',(request,response,next)=>{
	response.send("I am a full stack web application Developer");
	next();
	
})
app.get('/about',(request,response,next)=>{
response.json({name:"Abu Al Shahriar rifat",university:"University of Sharda"},)
})

app.post('/log_in',(request,response)=>{
 console.log(request.body.email);
 console.log(request.body.password);
 response.send("The account is logging succesfully");
})
app.listen(3001,()=>console.log('Server is running at port 3001'));