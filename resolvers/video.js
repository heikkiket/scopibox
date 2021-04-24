import VideoCtrl from "../controllers/VideoController.js";

export default {
  Query: {
    randomVideo: async () => await VideoCtrl.findRandom(),
  },
  Mutation: {
    addVideo: async(parent, args) => await VideoCtrl.addVideo(args)
  }
};
