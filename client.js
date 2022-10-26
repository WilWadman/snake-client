const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,

  });
  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log('Connected to game server');
    conn.write("Name: WEW")
    conn.on('data', (msg) => {

      console.log(msg);


    });

    conn.setEncoding("utf8");

    return conn;

  });
};
console.log("Connecting ...");


module.exports = {
connect,
}




