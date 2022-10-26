const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
    
      
    });
    conn.on("connect", (data) => {
      // code that does something when the connection is first established
console.log('Connected to game server');
conn.on('data', (msg) => {
  
  console.log(msg);


});
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

  });
};
  console.log("Connecting ...");
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