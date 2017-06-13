import * as mongoose from 'mongoose';
const { Schema, Types } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  discontinueDate: {
    type: Date
  }
}, {
  collection: 'products',
  timestamps: true
});


const Product = mongoose.model('Product', ProductSchema);
export default Product;