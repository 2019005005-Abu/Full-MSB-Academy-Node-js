//delete a file
const fs=require('fs');
fs.unlink('./5.Node_5.txt',(err)=>{
if(err)console.log(err);
else console.log("File has been deleted");
})