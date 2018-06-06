

//async code no promise....this is a problem....
let time = 0;

// const timeMachine = () =>{

//     return setTimeout(()=>{
//         return time += 1000;
//     }, 1000);
// }

// timeMachine();
// console.log(time);

//promises will help the async nature of this function fire correctly in the stack the way we want it to call

//Promises:
    //1) Pending State - when a promise is neither fulfilled nor rejected
    //2) Fulfilled State - have the data or thing that we need and are resolving the promise
    //3) Rejecrted State - some error happened; we don't have the data.

const timeMachine = () =>{
    return new Promise((resolve, reject)=>{ //resolve and reject are two functions that we use as cb's
       setTimeout(()=>{
           resolve((time +=9));
       }, 1000);
    });
}

console.log(timeMachine());

parseTime = (ms) =>{
    return new Promise((resolve, reject)=>{
        if (ms > 1000){
            const MyString = `${ms} ms have passed by`;
            resolve(MyString);
        } else{
            reject(new Error('MS needs to be at least 1000'));
        }
        
    });
}

timeMachine()
    .then(parseTime)
    .then(stringTime =>{
        console.log(stringTime);
    }) //Promise Chaining
    .catch(err =>{
        console.log(err);
    })
    