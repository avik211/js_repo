console.log(null>=0);//comparision operator such as >,<,>=,<= turns the null into 0 and than proceed
console.log(null==0);
console.log(null<0);
console.log(null<=1);
console.log("2"===2);//=== os used for strict check which also take care of the datatype
//dont write such type of code
console.log(undefined>=0);
console.log(undefined==0);
console.log(undefined<0);//in case of any relational operator undefined gets converted into NaN
//and nan has a property that it is neither equals to or gretaer than any other number infact nan itself
let id1=Symbol('123')
let id2=Symbol('123')
console.log( id1);
console.log(id2);
console.log(id1==id2);//symbols ka speciality ye hai ki woh vreturn value unique hi dete hai 
