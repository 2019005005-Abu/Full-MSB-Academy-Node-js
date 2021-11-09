//Read a file
const fs=require('fs');
fs.readFile('./nodejs.txt','utf-8',(err,data)=>{
 if(err)console.log(new Error("This is a error"));
  else console.log(data);
})