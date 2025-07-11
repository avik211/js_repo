const { jsx } = require("react/jsx-runtime");

 let sym1=Symbol("key1")
const user={
    name:"avik",
    [sym1]:"keyyyyy",//by this way we can use symbol as object  tooo
    title:"gupta",
    age:24,
    phone:9101992564,
    islogedin:true


}

console.log(user["age"]);
console.log(user.age);
console.log(user);



