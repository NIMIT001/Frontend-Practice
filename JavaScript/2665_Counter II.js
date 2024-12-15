var createCounter = function(init) {
    let counter = init;
    function increment (){
     return ++counter;
    }
    function decrement(){
     return --counter;
 
    }
    function reset(){
     return counter = init;
 
    }
 
 return {increment , decrement , reset};//We can write like that becoz the key and value has
                                                 // exact same name .
 
 // return {
 //     increment : increment ,
 //     decrement : decrement,
 //     reset : reset
 // }
 };
 