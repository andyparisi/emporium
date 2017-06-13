import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  email: {
    type: String
  },
  phone: {
    type: String
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
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
  isOwner: {
    type: Boolean
  }
}, {
  collection: 'employees',
  timestamps: true
});


const Employee = mongoose.model('Employee', EmployeeSchema);
export default Employee;