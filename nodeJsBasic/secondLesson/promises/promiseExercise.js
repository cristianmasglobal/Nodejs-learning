const users = require("../JSONS/user.json");
const products = require("../JSONS/products.json");

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject("Not found");
      }
    }, 1000);
  });
};

const getProduct = (id, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("Not found");
      }
    }, 1000);
  });
};

getUser(1)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

getProduct(2)
  .then((product) => {
    console.log(product);
  })
  .catch((error) => {
    console.log(error);
  });

//We are already using promise to solve the callbacks hell
