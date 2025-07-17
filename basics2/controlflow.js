let arr2=["avik"];
console.log(arr2.length);
let arr3=[1];
if(arr3.length==0){
    console.log("'array is empty");
}
else{
    console.log("array is not empty")
}
//falsy values:false,0,-0,BigInt,On,"",null,undefined,NaN
//truthy values:"0",'false'," ",[], {}, function(){}
 
//null coalescing operator:
let val1=5??10
let val2=null??10;
console.log(val1);
console.log(val2);
//this opreator check for null operator if it comes than it goes for the no null character

//ternary operator:
let price=25;
if(price>=20)?console.log("greater than 25"):console.log("less than 25")