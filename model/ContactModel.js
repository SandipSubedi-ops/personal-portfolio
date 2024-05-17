const mongoose=require('mongoose');
const validator=require('validator');

const contactMeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please tell us your name!']
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    message: {
      type: String,
      require:[true,'Please tell us your description'],
      maxlength:[100,'Descriptin cannot excced 100 character']
      
    }
});