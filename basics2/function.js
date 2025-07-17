let username=""
function greetings(name){
    if(name===undefined){
        return("please enter a  valid username")
    }
    
    return(`hey ${name} welcome have a great day`)
    
}
console.log(greetings());