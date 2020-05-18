var request = require('request');
var cheerio = require('cheerio');
var http =require('http');
var express =require('express');
var path =require('path');

const app =express();
const port = 3000;

var url ="https://time.com/";

request(url, function(err,response,html){
    if(!err){
        var $ = cheerio.load(html);

        // To find number of child
        var count = $(".latest .swipe-h").children().length;
        //console.log("Number of stories :"+count);

        var data ={
            title : "",
            url : ""
          };

          var arr=[];

          var store;

          // Loop through the number of child
        for(var i=0;i<count;i++){
            data.url="";
            data.title="";
            
            var allitems_1 =$('.latest .swipe-h>li:nth-child(' + (i+1) + ') .slide .content .title > a');
            var l1=$(allitems_1).attr('href');
            var v1=$(allitems_1).text();
            

            data.title=v1;
            data.url+="https://time.com";
            data.url+=l1;

            store = JSON.stringify(data);
            //if(data.title.length>0)
                arr.push(store);
            
        }




        var data_2 ={
            title : "",
            url : ""
          };

          
          var count_2 = $(".lead .trending .swipe-h").children().length;
          //console.log("Number of stories_s :"+count_2);

          var store_2;

          // Loop through the number of child
        for(var i=0;i<count_2;i++){
            data_2.url="";
            data_2.title="";
            
            var allitems_2 =$('.lead .trending .swipe-h>li:nth-child(' + (i+1) + ') .slide .content .title > a');
            var l2=$(allitems_2).attr('href');
            var v2=$(allitems_2).text();
            

            data_2.title=v2;
            data_2.url+="https://time.com";
            data_2.url+=l2;

            store_2 = JSON.stringify(data_2);
            //if(data.title.length>0)
                arr.push(store_2);
            
        }




            // Set the view and render HTML view
          app.set('views',path.join(__dirname,'views'));
          app.set('view engine','ejs');

          app.engine('html', require('ejs').renderFile);
          app.get('/', (req,res)=> {
              res.render('index.html', {m:arr});
          });



          // Port started on 3000
          app.listen(port, () =>{
              //console.log('$(port)');
          })

        
        
        
    }
});
