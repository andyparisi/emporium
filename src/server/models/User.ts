import { NextFunction } from 'express';
import * as mongoose from 'mongoose';
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection: 'users',
  timestamps: true
});

UserSchema.pre('save', function(next: NextFunction) {
  if(this.isModified('password') || this.isNew) {
    let user = this;
    bcrypt.genSalt(10, (err, salt) => {
      if(err) return next(err);

      // Hash the password
      bcrypt.hash(user.password, salt, (err, hash) => {
        if(err) return next(err);

        // Set the password to the hashed input
        user.password = hash;
        next();
      });
    });
  }
  else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);
export default User;