const mongoose = require('mongoose');

const ProvidersSchema = mongoose.Schema({
  name: {type:String},

  email:{type:String},

  phone:{type:Number},

  activity:  {type:mongoose.Types.ObjectId},

  service_name: {type:String},

  service_id: {type:mongoose.Types.ObjectId},

  status:  {type:Boolean},

  plan: {type:Number},

  activity_time: {type:Number},

  score: {type:Number},

  score_id:  {type:mongoose.Types.ObjectId},

  avatar: [String],

  catalog: [String],

  viewCount:{type:Number}
});

const Providers = mongoose.model('Providers', ProvidersSchema);

module.exports = Providers;
