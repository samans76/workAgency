const { string, number } = require('joi');
const mongoose = require('mongoose');

const provinceSchema = mongoose.Schema({
    name:{type:String,required:true},
    code:{type:Number},
    score:{type:Number},
    cities:[{
        name:{type:String},
        code:{type:String},
        score:{type:String}
    }]
})


const Province = mongoose.model('City',provinceSchema)

module.exports = Province;