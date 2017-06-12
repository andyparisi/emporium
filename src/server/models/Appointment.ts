import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  description: {
    type: String
  },
  transactionId: {
    type: String
  },
  status: {
    type: Number,
    required: true
  },
  authorId: {
    type: String,
    required: true
  },
  address1: {
    type: String
  },
  address2: {
    type: String
  },
  cityTown: {
    type: String
  },
  stateProvinceRegion: {
    type: String
  },
  zipPostalCode: {
    type: String
  },
  country: {
    type: String
  },
  phone1: {
    type: String
  },
  phone2: {
    type: String
  }
}, {
  collection: 'appointments',
  timestamps: true
});


const Appointment = mongoose.model('Appointment', AppointmentSchema);
export default Appointment;