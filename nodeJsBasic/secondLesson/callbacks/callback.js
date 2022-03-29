const users = require("../JSONS/user.json")
const products = require("../JSONS/products.json")

const getUser=(id, cb)=>{
    setTimeout(()=>{
        const user = users.find((user)=>user.id === id);
        cb(user);
    }, 1000)
}

const getProduct=(id, cb)=>{
    setTimeout(()=>{
        const product = products.find((product)=>product.id === id);
        cb(product);
    }, 1000)
}

getUser(1, (user) =>{
    console.log(user);
})

getProduct(2, (product) =>{
    console.log(product)
});

//We can found the call back hell that means the 
//way to create and create callbacks inside of callbacks and continue with the same problem in all the project
//The solution: Promise!