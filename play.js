const net = require("net");
const {connect} = require('./client.js')
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); 
   
  
  return stdin;
  };
const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {process.exit()}
  if (key === '\u0077'){process.stdin.write("Move: up")};
  if (key === '\u0061'){process.stdin.write("Move: left")};
  if (key === '\u0064'){process.stdin.write("Move: right")};
  if (key === '\u0073'){process.stdin.write("Move: down")};

};  
setupInput();

/*
const stdin = process.stdin;


const name = "Joseph Joestar"
client.setEncoding('utf8');
// event listener

// is a function that waits for something to happenen
// and when it happens.... it runs a callback 

stdin.on('data', (data) => {
  client.write(`${name}: ${data}`);
})

client.on('data', (msg) => {
  
  console.log(msg);
})*/