
var url = require('url');
var addr = "http://localhost:8080/default.htm?year=2018&month=November";
var q = url.parse(addr, true);

console.log(q.host);        // returns 'localhost:8080'
console.log(q.pathname);    // returns '/default.htm'
console.log(q.search);      // returns '?year=1028&month=November'

var qdata = q.query;        // returns an object: { year: 2018, month: 'November }
console.log(qdata.month);   // returns November