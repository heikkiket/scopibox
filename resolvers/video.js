import VideoCtrl from "../controllers/VideoController.js";

export default {
  Query: {
    randomVideo: async (parent, args, context) => {
      const result = await context.authenticate();
      console.log("This is the result", result)

      return await VideoCtrl.findRandom()},
  },
  Mutation: {
    addVideo: async(parent, args) => await VideoCtrl.addVideo(args)
  }
};
