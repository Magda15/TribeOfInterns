var http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!');
 }).listen(8080);
 
 //Task 1
//1.1 ES6 Methods
//--This is an example of a returning function
 function retStr() { 
    return "hello world!!!" 
 }  
 var val = retStr() 
 console.log(val)
 //--This is an example of a parametrized function
 function add( n1,n2) { 
    var sum = n1 + n2 
    console.log("The sum of the values entered "+sum) 
 } 
 add(12,13) 