import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: String,
  password: String,
  history: [{ title: String, url: String, date: Date }],
});

const User = mongoose.model("User", schema);

export default User;
