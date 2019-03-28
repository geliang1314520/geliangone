var express = require('express');
var router = express.Router();
var lubo = require('../models/lubo');
//插入路径
router.post('/lubo',function (req,res,next) {
   lubo.findlubo(req.body.src,function (err,finds ){
        if(finds.length!=0){
          res.json({status:1, message: "已注册"})
        }else{
            var registerUser =new lubo({
               src:req.body.src
            })
            registerUser.save(function () {
                res.json({status:0,message:"注册成功"});
            })
        }
    })
})
//查询路径
router.post('/lubos',function (req,res,next) {
    lubo.findlubos(function (err,finds ){
        res.json({status:0,message:"查询成功",data:finds});
    })
})
module.exports = router;