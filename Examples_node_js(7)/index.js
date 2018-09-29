var fs= require('fs');
//fs.unlink('file.txt', function () {});
//fs.mkdirSync('new-one1');
//fs.rmdirSync('new-one1');
/*fs.mkdir('new-one2', function () {
fs.writeFile('./new-one2/some-new.txt', "Привет мир", function(){
  console.log("Всё сработало");
})
});*/
fs.unlink('./new-one2/some-new.txt', function () {
  fs.rmdir('new-one2');
});
