/*
 I/O in node is asynchronous, so interacting with the disk and network involves passing callbacks to functions. You might be tempted to write code that serves up a file from disk like this:

 var http = require('http');
 var fs = require('fs');

 var server = http.createServer(function (req, res) {
 fs.readFile(__dirname + '/data.txt', function (err, data) {
 res.end(data);
 });
 });
 server.listen(8000);
 This code works but it's bulky and buffers up the entire data.txt file into memory for every request before writing the result back to clients. If data.txt is very large, your program could start eating a lot of memory as it serves lots of users concurrently, particularly for users on slow connections.

 The user experience is poor too because users will need to wait for the whole file to be buffered into memory on your server before they can start receiving any contents.

 Luckily both of the (req, res) arguments are streams, which means we can write this in a much better way using fs.createReadStream() instead of fs.readFile():

 var http = require('http');
 var fs = require('fs');

 var server = http.createServer(function (req, res) {
 var stream = fs.createReadStream(__dirname + '/data.txt');
 stream.pipe(res);
 });
 server.listen(8000);
 Here .pipe() takes care of listening for 'data' and 'end' events from the fs.createReadStream(). This code is not only cleaner, but now the data.txt file will be written to clients one chunk at a time immediately as they are received from the disk.
 */
/*
 Streams are readable, writable, or both. All streams are instances of EventEmitter
 */
    // read big file using stream
var fs = require('fs');
var readableStream = fs.createReadStream('abcd.txt',{ highWaterMark: 20 });

var data = '';
readableStream.on('data', function(chunk){
  console.log('Received  bytes of data.'+chunk.length);
});
readableStream.on('end', function(chunk){
  console.log('Read Done...');
});
//var x = false;
/*
 Streams can send data in chunks. By listening to the “data” event, you can be notifi ed every
 time a stream delivers a chunk. You can get the data as a buffer or as a string, depending on your
 stream-encoding settings
 */

// Older Way (Good for Small Size Files)
fs.readFile("abcd.txt",function(err,content){
   if(content){
       console.log("Content is ",content);
       fs.writeFile("test.txt",content,function(err){
           if(err){
               console.log("Can't Write Data");
           }
           else{
               console.log("Data Store...");
           }
       })
   } 
});

var writableStream = fs.createWriteStream('Test2.txt');
/*readableStream.on('data', function(chunk) {
 //if(!x) {
  //data += chunk;
  //x = true;
  writableStream.write(chunk);
 //}
});

readableStream.on('end', function() {
    console.log("End Call ",data);
});*/
 readableStream.pipe(writableStream);

/*
 Piping
 Piping is a great mechanism in which you can read data from the source and write to destination without managing the flow yourself.
 */


var readableStream = fs.createReadStream('Test.txt');
var writableStream = fs.createWriteStream('Test2.txt');

readableStream.pipe(writableStream);





var readableStream = fs.createReadStream('Test.txt');
var writableStream = fs.createWriteStream('Test3.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    writableStream.write(chunk);
});

