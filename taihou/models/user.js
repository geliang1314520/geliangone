var mongoose=require('../common/db')
//用户数据库
var user=new mongoose.Schema({
	username:String,
	password:String,
	biaoti:String,//标题
	biaotiId:String,//标题id
//	zhuti:String,//主题
//	details:String//详情
})

var recommendList = new mongoose.Schema({
	
})
user.statics.findByUsername=function(name,callBack){
	this.find({username:name},callBack);
}
//登录匹配是不是拥有的用户名和密码并且没有处于封零
user.statics.findUserLogin=function(name,password,callBack){
	this.find({username:name,password:password},callBack)
}


//根据id查
recommendList.statics.findById=function(id,callBack){
	this.find({baioti:id},callBack)
}



var userModel=mongoose.model('user',user);
module.exports=userModel;



//var lubo = new mongoose.Schema({
//  src:String
//})
////查询所有
//lubo.statics.findlubos = function (callBack) {
//  this.find({},callBack);
//};
//lubo.statics.findlubo = function (src,callBack) {
//  this.find({src:src},callBack);
//};
//
//var lubo = mongoose.model('lubo',lubo);
//module.exports = lubo
//


