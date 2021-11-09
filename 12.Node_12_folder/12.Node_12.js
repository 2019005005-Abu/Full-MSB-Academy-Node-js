const http=require('http');
const fs=require('fs').promises;
const server=http.createServer(async(request,response)=>{
console.log("Server is craeting....");
const data= await fs.readFile('./index.html','utf-8');
response.writeHead(200,{'Content-type':'text/html'});
response.end(data);
})
server.listen(3000);
