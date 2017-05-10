import { Document, Schema, model } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const User = model('User', UserSchema);
export default User;