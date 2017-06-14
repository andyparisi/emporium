import * as mongoose from 'mongoose';
const { Schema, Types } = mongoose;

const LogSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  userId: {
    type: Types.ObjectId,
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


const Product = mongoose.model('Product', LogSchema);
export default Product;