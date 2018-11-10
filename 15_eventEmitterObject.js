
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function() {
    console.log('I hear a Scream!');
}

// Assign a event handler to an event:
eventEmitter.on('Scream', myEventHandler);

// Fire the Scream event:
eventEmitter.emit('Scream');
