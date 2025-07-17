let arr1=[1,2,3,4,5,6,7,8]
console.log(arr1);
let arr2=new Array(1,2,3,4,5,6,"shaktiman")
console.log(arr2);
arr1.push(10);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.unshift(12);//ekdum samne laane me help karega 
console.log(arr1);
console.log(arr1.shift());//sabse phele elment ko hi hata deta hai 
console.log(arr1.slice(1,3));
console.log(" A ",  arr1);
console.log(arr1.splice(1,3));
console.log(" B ", arr1);//splice original arrow ko manipulate bhi krta hai 

let arr3=[1,2,3,4,5,6,8]
let arr4=[1,2,3,4,5,6,8]
let arrn=arr3.concat(arr4);
console.log("concat",arrn);
console.log("push",arr3.push(arr4))//push pe  consol log lagane se array ka length de dega 
console.log(arr3);

//
arr5=[1,2,3,4,[1,2,3],[1,2,3,[4,5]]]
console.log(arr3.flat(Infinity));
console.log(Array.isArray(arr5));
console.log(Array.from("avik"));
console.log(Array.from({key:"value"}));//yaha pe hume aur specify karna padega isee array me convert karne ke liye 
console.log(Array.of(1,2,3,4,6,7,8));



