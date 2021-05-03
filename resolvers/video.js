import VideoCtrl from "../controllers/VideoController.js";

export default {
  Query: {
    randomVideo: async (parent, args, context) => {
      const user = await context.authenticate();
      if (user) return await VideoCtrl.findRandom(user);
    },
    videoHistory: async (parent, args, context) => {
      const user = await context.authenticate();
      if (user) return await VideoCtrl.history(user);
    },
  },
  Mutation: {
    addVideo: async (parent, args) => await VideoCtrl.addVideo(args),
    emptyVideoHistory: async (parent, args, context) => {
      const user = await context.authenticate();
      if (user) return await VideoCtrl.emptyHistory(user);
    },
  },
};
