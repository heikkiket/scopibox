import mongoose from "mongoose";

import {encrypt} from '../login/password.js';

const schema = new mongoose.Schema({username: String, password: String});

const cryptPw = async function(user) {
  console.log(this.password)
  this.password = await encrypt(this.password)
  console.log(this.password)
}

schema.pre('save', cryptPw);

const User = mongoose.model("User", schema);

export default User;
