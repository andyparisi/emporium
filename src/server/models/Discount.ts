import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const DiscountSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  adjustment: {
    type: Number
  }
}, {
  collection: 'discounts'
});


const Discount = mongoose.model('Discount', DiscountSchema);
export default Discount;