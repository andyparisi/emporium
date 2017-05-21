import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  collection: 'users',
  timestamps: true
});

const User = mongoose.model('User', UserSchema);
export default User;