var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve,reject)=>{//yeh Promise Async task/code ko ache se handle karta h 
        setTimeout(()=>{
           reject("Time Limit Exceeded")
           
        },t)// yeh asyncronuse code h isko handle krne ke liye promise ka use krna hoga
        
        fn(...args).then(resolve).catch(reject);


        })

    }
};