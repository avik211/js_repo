let myname="avik"
let myname1=myname
console.log(myname1);
myname1="priyanka"
console.log(myname1);
console.log(myname);
let user1={
    email:"avik239@gmail.com",
    phone:9101992563
}
let user2=user1
  
user2.email="priyanka239@gmail.com"

console.log(user1.email);
console.log(user2.email);
//note: stack(primitive datatype use krta hai ) me jab humlog call krte hai tab uska ek copy banake deta hai toh even hum copyme kuch bhi karle mainwale mein farak nhi parega 
//note:heap(no primitve dtattype use krta hai) jab humlog call krta hai toh main wale ka hi excees de deta toh koi bhi change krne se main wale me bhi change hojaega 