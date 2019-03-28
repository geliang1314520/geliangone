var mongoose=require('mongoose');
var url='mongodb://localhost/gl'
mongoose.connect(url);
//连接数据库
module.exports=mongoose;
