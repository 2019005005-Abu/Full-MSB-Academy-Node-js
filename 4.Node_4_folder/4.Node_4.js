const fs=require('fs');
fs.rename('./nodejs.txt','./4.Node_4.txt',(err)=>{
 if(err)console.log(err);
 else console.log("File name has been renamed");
})