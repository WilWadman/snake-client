const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,

  });
  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log('Connected to game server');
    conn.write("Name: WEW");

    //setInterval (() => conn.write("Move: up"), 50)




  });
  conn.on('data', (msg) => {

    console.log(msg);


  });

  conn.setEncoding("utf8");

  return conn;
};
console.log("Connecting ...");


module.exports = {
  connect,
};




