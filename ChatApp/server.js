var events = require('events');

var myEmiter = new events.EventEmitter();

myEmiter.on('clik',function(msg){
    console.log(msg);
});

myEmiter.emit('clik','event is handled');
