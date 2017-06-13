import * as mongoose from 'mongoose';
const { Schema, Types } = mongoose;

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
  previousAppointmentId: {
    type: Types.ObjectId
  },
  nextAppointmentId: {
    type: Types.ObjectId
  },
  creatorId: {
    type: Types.ObjectId,
    required: true
  },
  status: {
    type: Number,
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