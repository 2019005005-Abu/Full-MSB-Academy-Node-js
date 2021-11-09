 const fs=require('fs').promises;
 async function DeletingTheFileSystem(){
 const DeleteFile=await fs.unlink('./Delete.txt');
 console.log(DeleteFile);
 console.log("The File has been deleted");
 
}
DeletingTheFileSystem();