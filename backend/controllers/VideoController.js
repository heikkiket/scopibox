import Video from "../models/Video.js";

const random = function (max) {
  return Math.floor(Math.random() * max);
};

const findRandom = async () => {
  const videos = await Video.find();
  return await videos[random(videos.length)];
};

const addVideo = async (params) => await new Video(params).save();

export default { findRandom, addVideo };
