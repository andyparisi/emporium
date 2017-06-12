import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const ServiceSchema = new Schema({
  rate: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
}, {
  collection: 'services'
});


const Service = mongoose.model('Service', ServiceSchema);
export default Service;