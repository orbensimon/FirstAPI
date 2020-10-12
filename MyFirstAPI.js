var rs = require('readline-sync');
var myModule = require('./myModule');
var name = rs.question('what is your name?');
console.log(myModule(name));