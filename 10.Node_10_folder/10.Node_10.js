const fs=require('fs').promises;
async function getSum(){
const dataRead= await fs.readFile('./data.json','utf-8');
let dataParsee=JSON.parse(dataRead);
let sumOfSalalry=0;
for(let salaryIs of dataParsee){
	sumOfSalalry+=salaryIs.salary;
   }
 console.log('Total Salalry is',sumOfSalalry);
 await fs.writeFile('./sum.txt',sumOfSalalry);
// console.log("The Total salary is",creatingFile);
};
getSum();
