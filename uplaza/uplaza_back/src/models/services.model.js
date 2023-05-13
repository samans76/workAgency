const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    group_id: { type: mongoose.Types.ObjectId },
    group_name: { type: String },
    status: { type: Boolean, default: true },
    avatar: { type: String },
    subTitle: { type: [String] },
    score: { type: Number },
  },
  { timeStamps: true }
);

const Services = mongoose.model('Services', servicesSchema);
module.exports = { Services };
