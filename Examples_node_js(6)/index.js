var fs=require('fs');
//var file_readed=fs.readFileSync('text.txt','utf8');
var file_readed=fs.readFile('text.txt','utf8', function (err,data) {
  console.log(data);
});
  console.log("test");
/*var message="Привет мир!\n" + file_readed;
fs.writeFileSync('new_text.txt',message);*/
fs.writeFile('new.txt','message', function (err,data) {});
