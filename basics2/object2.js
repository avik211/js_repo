let obj1={1:"a",2:"b",3:"c"}
let obj2={4:"d",5:"e"}
let obj3={...obj1,...obj2}
console.log(obj3);
let obj4=Object.assign({},obj1,obj2);
console.log(obj4);
// let obj5=new Object() it is used to define singelton object 
let user={}
user.fullname={
    firstname:"avik",
    lastname:"gupta"
}
user.age=24
user.regno=2411071

console.log(user.fullname.lastname);
//to get the keys if an object
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(user.fullname.hasOwnProperty("firstname"));//to check if a object has a particular property 

//destructuring an object :
let userinfo={
    name:"player1",
    userid:"UB12DSKA",
    age:21
}
let{userid:uid}=userinfo
console.log(uid);
//api can be in two forms
//{----
//----}

}
//or 
//kbhi kbhi api hume ese array milta hai ki jiss aaray me humara bphut saare pbjects ho 