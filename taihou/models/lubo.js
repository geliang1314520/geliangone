var mongoose = require('../common/db');

var lubo = new mongoose.Schema({
    src:String
})
//查询所有
lubo.statics.findlubos = function (callBack) {
    this.find({},callBack);
};
lubo.statics.findlubo = function (src,callBack) {
    this.find({src:src},callBack);
};

var lubo = mongoose.model('lubo',lubo);
module.exports = lubo