const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  name:String,
  email: String,
  password: String
},{
  timestamps:true
});

userSchema.methods.encryptPassword = async (password) => {
  return await bcrypt.hash(password,10);
};

userSchema.methods.comparePassword=  async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('users', userSchema);


