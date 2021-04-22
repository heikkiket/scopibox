import mongoose from "mongoose";

const schema = new mongoose.Schema({ title: String, url: String });

schema.statics.findRandom = async function () {
  return await this.find({}, null, {limit: 1});
};

const Video = mongoose.model("Video", schema);

export default Video;
