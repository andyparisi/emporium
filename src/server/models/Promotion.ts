import * as mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const PromotionSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  adjustment: {
    type: String,
    required: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  services: [
    ObjectId
  ],
  products: [
    ObjectId
  ]
}, {
  collection: 'promotions',
  timestamps: true
});


const Promotion = mongoose.model('Promotion', PromotionSchema);
export default Promotion;