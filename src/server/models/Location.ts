import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
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
  }
}, {
  collection: 'locations',
  timestamps: true
});


const Location = mongoose.model('Location', LocationSchema);
export default Location;