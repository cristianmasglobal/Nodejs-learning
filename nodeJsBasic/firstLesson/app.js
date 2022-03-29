//Calling the http value to init server
const http = require("http");

//Call the server in a functional and creating the port
const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/":
      response.end(home());
      break;
    case "/user":
      response.end(user());
      break;
    case "/product":
      response.end(product());
      break;
    default:
      response.end(deff());
      break;
  }
});
const port = 5050;

//Function to call the server and make it listen
server.listen(port, () => {
  console.log("Server listening on port:", { port });
});

function home() {
  return "<html><head><title>Firs app</title></head><body><h1>Hello to home</h1></body></html>";
}

function user() {
  return "<html><head><title>Firs app</title></head><body><h1>Hello to user view</h1></body></html>";
}

function product() {
  return "<html><head><title>Firs app</title></head><body><h1>Hello to product view</h1></body></html>";
}

function deff() {
  return "<html><head><title>Firs app</title></head><body><h1>Error</h1></body></html>";
}
