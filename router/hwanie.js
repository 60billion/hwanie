module.exports = function(app)
{   
   //app 대신 router를 쓰는이유는 url 정돈이 깔끔할거 같아서
   var express = require('express');
   var router = express.Router();

   //css 및 정적 파일을 사용하기위해서
   router.use(express.static('public'));
   var a;

   router.get('/clues',function(req,res){
    a= a+1;
    console.log(a);
    res.render('hwanie');
     });

   router.post('/clues',function(req,res){
    var clue1 = req.body.clue1;
    var clue2 = req.body.clue2;
    var clue3 = req.body.clue3;
    var clue4 = req.body.clue4;
    var clue5 = req.body.clue5;
    console.log(`${clue1},${clue2},${clue3},${clue4},${clue5}`);
    if(clue1 == "3" && clue2 == "1" && clue3 == "3" && clue4 == "3" && clue5 == "2"){
      console.log("correct");
      res.render('correct');
    }else{
      console.log("failed");
      res.render('failed');
    }


   });

   return router;
}