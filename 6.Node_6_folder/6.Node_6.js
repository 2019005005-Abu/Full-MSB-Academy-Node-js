const fs=require('fs').promises;
  async function craetingFileSystem(){
	 await fs.writeFile('./Node_6.txt',"Hello I am a full stack developer");
 }
  craetingFileSystem();
