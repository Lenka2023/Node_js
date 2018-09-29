var fs= require('fs');
var myReadShort=fs.createReadStream(__dirname +'/article.txt', 'utf-8');
var myWriteShort=fs.createWriteStream(__dirname +'/new.txt');

/*myReadShort.on('data', function (chunc) {
  console.log("Новые данные получены\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + chunc);
});*/
myReadShort.on('data', function (chunc) {
  console.log("Новые данные получены\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + chunc);
  myWriteShort.write(chunc);
});
