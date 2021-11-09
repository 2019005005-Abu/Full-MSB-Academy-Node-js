const fs=require('fs').promises;
async function readingFileSystem(){
const data=await fs.readFile('./7.File.txt','utf-8');
console.log(data);
	 
}
readingFileSystem();