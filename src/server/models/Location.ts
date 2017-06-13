import * as mongoose from 'mongoose';
const { Schema, Types } = mongoose;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ownerId: {
    type: Types.ObjectId,
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
  },
  phone: {
    type: String
  },
  email: {
    type: String
  }
}, {
  collection: 'locations',
  timestamps: true
});


const Location = mongoose.model('Location', LocationSchema);
export default Location;