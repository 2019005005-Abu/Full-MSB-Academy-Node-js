//Rename
const fs=require('fs').promises;
 async function RenameFileSystem(){
 await fs.rename('./8.File.txt',"8.Node_8.1.txt");
 console.log('The File has benn renamed');
 }
RenameFileSystem();
