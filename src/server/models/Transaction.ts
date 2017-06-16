import * as mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  clientId: {
    type: ObjectId,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  discountId: {
    type: ObjectId
  },
  appointmentId: {
    type: ObjectId
  }
}, {
  collection: 'transactions',
  timestamps: true
});


const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;