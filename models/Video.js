import mongoose from "mongoose";

const schema = new mongoose.Schema({ title: String, url: String });

const Video = mongoose.model("Video", schema);

export default Video;
