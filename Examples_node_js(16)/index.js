var express= require('express');
var app=express();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.get('/',function(req,res){
res.render('index');
});
app.get('/about',function(req,res){
res.render('about');
});
app.post('/about', urlencodedParser, function(req,res){
   if (!req.body) return res.sendStatus(400);
  console.log(req.body);
res.render('about-success',{data:req.body});
});
app.get('/news/:id',function(req,res){
  var obj={tittle:"Новость", id:4,paragraphs:['Параграф', 'Обычный текст', 'Числа:2,4,6',99]};
res.render('news', {newsId:req.params.id,newParam:234, obj: obj});
});
app.listen(3000);
/*var fs= require
('fs');
var server=http.createServer(function(req,res){
  console.log("URL страницы" + req.url);
  if((req.url==='/index')||(req.url==='/')){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    fs.createReadStream(__dirname +'/index.html').pipe(res);
  }else if(req.url==='/about'){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    fs.createReadStream(__dirname +'/about.html').pipe(res);
  }else{
    res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
    fs.createReadStream(__dirname +'/404.html').pipe(res);
  }
});
server.listen(3000,'127.0.0.1');
console.log("Мы отслеживаем порт 3000");*/
