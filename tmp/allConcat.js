var alarmClock = require('./../js/alarmClock.js').alarmClock;

$(document).ready(function(){
  $('#setAlarm').submit(function(event){
    event.preventDefault();
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});
