(function one(){
    console.log("hello one");//named iife
})();
((name)=> {//unnamed iife
    console.log(`hello two ${name}`);
})("avik");
//whenever we write two iffe always use ; at the end of first iide