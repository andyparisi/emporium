import * as mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const LogSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  userId: {
    type: ObjectId,
    required: true
  },
  ipAddress: {
    type: String,
    required: true
  }
}, {
  collection: 'logs',
  timestamps: true
});


const Log = mongoose.model('Log', LogSchema);
export default Log;