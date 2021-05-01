import mongoose from "mongoose";

import { encrypt } from "../login/password.js";

const schema = new mongoose.Schema({
  username: String,
  password: String,
  history: [{ title: String, url: String, date: Date }],
});

const cryptPw = async function (user) {
  this.password = await encrypt(this.password);
};

const removePw = function () {
  this.password = undefined;
};

schema.pre("save", cryptPw);
schema.post("find", removePw);
schema.post("save", removePw);

const User = mongoose.model("User", schema);

export default User;
