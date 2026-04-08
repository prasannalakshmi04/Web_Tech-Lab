const EventEmitter = require("events");

// create object
const eventEmitter = new EventEmitter();

// listener 1
eventEmitter.on("greet", (name) => {
  console.log("Hello " + name);
});

// listener 2 (multiple listeners)
eventEmitter.on("greet", (name) => {
  console.log("Welcome " + name);
});

// another event
eventEmitter.on("bye", () => {
  console.log("Goodbye!");
});

// emit event with data
eventEmitter.emit("greet", "Prasanna");

// emit another event
eventEmitter.emit("bye");