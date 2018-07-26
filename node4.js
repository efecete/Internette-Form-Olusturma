var http = require('http');
var fs=require('fs'); // fs kütüpahanesi file system kodlarını aktarır

http.createServer(function(req,res) {
    fs.readFile('ad-soyad.html', function(err, data){ // "demo"(ad-soyad) değişebilir
        res.writeHead(200, {'Content-type':'text/html'});
    // text/html gelen verilerin html olarak aktarılmasını sağlar
    res.write(data);// data içinde yazdığımız html kodlarını yazdırır
    res.end();// işlemin bittğini gösterir
});
}).listen(8080); //yukarıdaki işlemleri localhost:8080 portuna aktarır