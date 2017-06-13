import * as mongoose from 'mongoose';
const { Schema, Types } = mongoose;

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  clientId: {
    type: Types.ObjectId,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  discountId: {
    type: Types.ObjectId
  },
  appointmentId: {
    type: Types.ObjectId
  }
}, {
  collection: 'transactions',
  timestamps: true
});


const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;