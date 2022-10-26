const net = require("net");
const {connect} = require('./client.js')
connect();

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