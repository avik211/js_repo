let num=1986.456
console.log(typeof(num));
let num1=new Number(1984.456)
console.log(num1);
console.log(num);
console.log(num.toString().length);
console.log((num.toFixed(2)));//it rounds the value to the nearest value
console.log(typeof (num.toFixed(2)));
console.log(num.toPrecision(3))
console.log(num1.toPrecision(3))//in to precision me decimal ke phele wale digits ko jyada priroity dete hai 
console.log(Math.pow(num,2));
console.log(Math.floor((Math.random()*10)+1));
//to find random number btw two numbers:
let max=21
let min=12
console.log(Math.floor((Math.random()*(max-min))+min+1));
