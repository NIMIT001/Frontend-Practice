var addTwoPromises = async function(promise1, promise2) {
    // phele promise ka wait krna h usko resolve hone do 
    const [val1 , val2] = await Promise.all([promise1,promise2]);


    // then return after getting the value of val1 and val2
    return val1 + val2;
};

