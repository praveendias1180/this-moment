var moment = require('moment');
var t = moment().format(); 
console.log(t)

var now = moment()
console.log(now)

var d_0 = moment().day(0).format();
console.log('This Sunday is ' + d_0)

var d_7 = moment().day(7).format();
console.log('Next Sunday is ' + d_7)