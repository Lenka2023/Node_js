var fs= require('fs');


/*myReadShort.on('data', function (chunc) {
  console.log("Новые данные получены\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + chunc);
});*/

/*var http= require('http');
var server=http.createServer(function(req,res){
  console.log("URL страницы" + req.url);
  res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
  var myReadShort=fs.createReadStream(__dirname +'/article.txt', 'utf-8');
  myReadShort.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log("Мы отслеживаем порт 3000");*/
/*var http= require('http');
var server=http.createServer(function(req,res){
  console.log("URL страницы" + req.url);
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  var myReadShort=fs.createReadStream(__dirname +'/index.html', 'utf-8');
  myReadShort.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log("Мы отслеживаем порт 3000");*/
var http= require('http');
var server=http.createServer(function(req,res){
  console.log("URL страницы" + req.url);
  res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
var obj={
  model:'Audi',
  speed:'24,5',
  wheels:4
};
res.end(JSON.stringify(obj));
});
server.listen(3000,'127.0.0.1');
console.log("Мы отслеживаем порт 3000");
