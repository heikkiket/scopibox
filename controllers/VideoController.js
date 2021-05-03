import Video from "../models/Video.js";
import UserController from "../controllers/UserController.js";

const random = function (max) {
  return Math.floor(Math.random() * max);
};

const findRandom = async (user) => {
  const notInHistory = (video) =>
    !user.history.find((viewed) => viewed.url === video.url);

  const videos = await Video.find();
  const unseen = videos.filter(notInHistory);
  const video = unseen[random(unseen.length)];
  if (video) {
    await UserController.addToHistory(video, user);
    return video;
  }
  return [];
};

const addVideo = async (params) => await new Video(params).save();
const history = async (user) => {
  if (!user) throw new Error("No user defined!");
  else return user.history;
};
const emptyHistory = async (user) => {
  if (!user) throw new Error("No user defined!");

  if (user.history.length > 0) {
    user.history = [];
    await user.save();
    return true;
  } else {
    return false
  }
};

export default { findRandom, addVideo, history, emptyHistory };
