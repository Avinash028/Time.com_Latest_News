var request = require('request');
var cheerio = require('cheerio');
var http =require('http');

var url ="https://time.com/";

request(url, function(err,response,html){
    if(!err){
        var $ = cheerio.load(html);

        var allitems_1 =$(".latest .swipe-h>li:nth-child(1) .slide .content .title > a");
        var l1=$(allitems_1).attr('href');
        var v1=$(allitems_1).text();

        var allitems_2 =$(".latest .swipe-h>li:nth-child(2) .slide .content .title > a");
        var l2=$(allitems_2).attr('href');
        var v2=$(allitems_2).text();

        var allitems_3 =$(".latest .swipe-h>li:nth-child(3) .slide .content .title > a");
        var l3=$(allitems_3).attr('href');
        var v3=$(allitems_3).text();

        var allitems_4 =$(".latest .swipe-h>li:nth-child(4) .slide .content .title > a");
        var l4=$(allitems_4).attr('href');
        var v4=$(allitems_4).text();

        var allitems_5 =$(".latest .swipe-h>li:nth-child(5) .slide .content .title > a")
        var l5=$(allitems_5).attr('href');
        var v5=$(allitems_5).text();
        
        var data ={
            title : "",
            url : ""
          };

          var arr=[];

        data.title=v1;
        data.url+="https://time.com";
        data.url+=l1;

        var store = JSON.stringify(data);

        arr.push(store);

        data.title="";
        data.url="https://time.com";
        

        data.title=v2;
        //data.url+="https://time.com";
        data.url+=l2;

        var store = JSON.stringify(data);

        arr.push(store);

        data.title="";
        data.url="https://time.com";

        data.title=v3;
        //data.url+="https://time.com";
        data.url+=l3;

        var store = JSON.stringify(data);

        arr.push(store);

        data.title="";
        data.url="https://time.com";

        data.title=v4;
        //data.url+="https://time.com";
        data.url+=l4;

        var store = JSON.stringify(data);

        arr.push(store);

        data.title="";
        data.url="https://time.com";

        data.title=v5;
        
        data.url+=l5;

        var store = JSON.stringify(data);
        //console.log("<br><br><br>");
        arr.push(store);

        var items=[];

       

        console.log(arr);

        let handleRequest = (request, response) => {
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write("Hello World");
            response.end();
        };

        
        
        http.createServer(handleRequest).listen(8000);
        
        
    }
});
