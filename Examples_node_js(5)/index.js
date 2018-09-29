var events = require('events');
var util = require('util');
var Cars = function(model){
  this.model=model;
}
util.inherits(Cars, events.EventEmitter );
var bmw=new Cars('bmw');
var audi=new Cars('audi');
var volvo=new Cars('volvo');
var cars=[bmw, audi,volvo];
cars.forEach(function(car){
  car.on('speed', function(text) {
  console.log(car.model +"speed is-"+text);
  });
});
bmw.emit('speed', '254 km');
volvo.emit('speed', '180 km');

/*var myEmit=new events.EventEmitter();
myEmit.on('some_event', function(text) {
console.log(text);
});
myEmit.emit('some_event', 'Обработчик событий сработал!')*/
