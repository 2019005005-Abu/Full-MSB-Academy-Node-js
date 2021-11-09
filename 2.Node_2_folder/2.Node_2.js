const fs=require('fs');
//create a File with fs
fs.writeFile('./nodejs.txt','Hello Node js',(err)=>{
 if(err)console.log(err);
 else console.log("This File has just created");
});
//Read a file
fs.readFile('./nodejs.txt','utf-8',(err,data)=>{
 if(err)console.log(new Error("This is a error"));
  else console.log(data);
})