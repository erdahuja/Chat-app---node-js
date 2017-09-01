var EventEmitter = require("events");
var readline = require("readline");
var client = new EventEmitter();
var server = require("../server.js")(client);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  console.log(`Received: ${line}`);
  client.emit('input',line);
});


