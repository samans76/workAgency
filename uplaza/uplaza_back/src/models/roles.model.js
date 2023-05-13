const mongoose =require('mongoose');


const roleSchema = mongoose.Schema({
    name:{type:String},
    roles:{type:[String]}``
})


const Roles = mongoose.model("roles",roleSchema)

module.exports = Roles;