const check = true;

const promise = new Promise((resolve, reject) => {
    if (check){
        resolve("Done");
    }
    else {reject("Not done")}
})

promise.then(((res)=>{
    console.log(res);
})).catch((error)=>{console.log(error)})