

var express = require('express');
var router = express.Router();
var UserModel=require("./userdata");

router.get("/", function(req,res){
    //
   // res.render('register');
    console.log(111);
});


router.post("/",function(req,res){
  UserModel.find({
    email:req.body.email,
    password:req.body.password
  },function(error,info){
    if(!error){
    if(info.length>0){
        console.log("已经有人注册了");
        res.send("issno")
    }
    else{
    UserModel.create({
    email:req.body.email,
    password:req.body.password
  },function(error,info){
        if(!error){
            console.log(info);
            res.send("isshave");
        }
  })
    }
   }
  })
})



router.post("/login",function(req,res){
  UserModel.find({
    email:req.body.email,
    password:req.body.password
  },function(error,info){
    if(!error){
    if(info.length>0){
        console.log("你可以登陆了");
        res.send("jump");
    }
    else{
        console.log(info);
        console.log("haha");
   }
  }
})
})
module.exports=router;







