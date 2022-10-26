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

module.exports = {
  setupInput,

}