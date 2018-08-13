var events = require('events');
var util = require('util');

var person = function(name){
  this.name = name;
};

util.inherits(person,events.EventEmitter);

var mayank = new person("Mayank");
var inzy = new person("Inzy");
var subham = new person("subham");

var buddies = [mayank,inzy,subham];

buddies.forEach(function(names){
     names.on('speak',function(msg){
        console.log(names.name + " said " + msg);
     });
});
mayank.emit('speak','Fuck you chutiyon');
inzy.emit('speak','i m inzamam');