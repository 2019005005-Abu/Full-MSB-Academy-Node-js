const add=require('./add.js');
const sub=require('./sub.js');
const div=require('./div.js');
const mul=require('./mul.js');
const a=parseInt(process.argv[2]);
const choice=process.argv[3];
const b=parseInt(process.argv[4]);
console.log("The results are",a,choice,b);
if(choice==='ADD'){
    console.log(add(10,20));
}else if(choice==='SUB'){
	console.log(sub(200,100));
}else if(choice==='MUL'){
	console.log(mul(a,b));
}else if(choice==='DIV'){
	console.log(div(a,b));
}else{
	console.log("Invalid Choice")
}
console.log("The sum of the 2 numbers are",add(100,200));
console.log("The sum of the 2 numbers are",sub(100,200));
console.log("The sum of the 2 numbers are",mul(100,200));
console.log("The sum of the 2 numbers are",div(100,200));