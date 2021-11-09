const validator=require('validator');
console.log(validator.isEmail('rifatdiu2686@gmail.com'));
console.log(validator.isJSON(JSON.stringify({
'name':'Abu Al Shahriar Rifat',
'University':'University of Sharda',
'profession':'Software Enginner'
})));
console.log(validator.isPort('3000'));
console.log(validator.isURL('http://localhost:3000/'));
