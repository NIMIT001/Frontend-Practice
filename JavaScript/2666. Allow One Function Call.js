var once = function(fn) {
         let called = false ;

    return function(...args){
        if(!called)
        {
            called = true;
            //return fn(...args)
            return fn.apply(this,args)
        }
        return undefined;
    }
};


// apply() concept :


const person = {
        name : 'Nimit'
}

function printName(){
    console.log(this.name);

}


printName();// Undefined

printName.apply(person); // Nimit
// warrape karne deta h 