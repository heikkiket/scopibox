import Video from "../models/Video.js";
const random = function (max) {
  return Math.floor(Math.random() * max);
};

const findRandom = function () {
  const videos = Video.find();
  return videos[random(videos.length)];
};

export default { findRandom };
