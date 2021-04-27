import VideoCtrl from "../controllers/VideoController.js";

export default {
  Query: {
    randomVideo: async (parent, args, context) => {
      if(await context.authenticate()) return await VideoCtrl.findRandom()},
  },
  Mutation: {
    addVideo: async(parent, args) => await VideoCtrl.addVideo(args)
  }
};
