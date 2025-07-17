 let user={
        name1:"avik",
            id:"U91D34",
                greeting:function(){
                        console.log(`hello ${this.name1}, your id is ${this.id}`);
                        console.log(this); //it will lead to print all the current value in the user object 
                                
                                    }
                                    }
                                    user.greeting(); 
                                    console.log(this);//in global context it will give an empty object 
                                    //note: this se humlog object ki andar hi kar skte hai jese hi hum function ke andar try lkarenge value ko nikalne ki undefined dega 
                                    
//note: normally we describe fnc as let addtwo=function(num1,num2) 
let addtwo=(num1,num2)=>{
    console.log(`the sum of numbers is ${num1+num2}` );
}
addtwo(23,45)
//aur ek method :
let addthree=(num1,num2,num3)=>(num1+num2+num3)
console.log(addthree(7,8,9));
//agr isme rakha toh return likhne ak jarurat nhi () 