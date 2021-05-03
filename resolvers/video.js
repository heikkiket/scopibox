import VideoCtrl from "../controllers/VideoController.js";

export default {
  Query: {
    randomVideo: async (parent, args, context) => {
      const user = await context.authenticate();
      if (user) return await VideoCtrl.findRandom(user);
    },
    videoHistory: async (parent, args, context) => {
      return await VideoCtrl.history();
    },
  },
  Mutation: {
    addVideo: async (parent, args) => await VideoCtrl.addVideo(args),
  },
};
