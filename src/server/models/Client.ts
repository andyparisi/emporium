import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  description: {
    type: String
  },
  address1: {
    type: String,
    required: true
  },
  address2: {
    type: String,
    required: true
  },
  cityTown: {
    type: String,
    required: true
  },
  stateProvinceRegion: {
    type: String,
    required: true
  },
  zipPostalCode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phone1: {
    type: String
  },
  phone2: {
    type: String
  }
}, {
  collection: 'clients',
  timestamps: true
});


const Client = mongoose.model('Client', ClientSchema);
export default Client;