import UserController from "../controllers/UserController.js";
export default {
  Mutation: {
    login: async (parent, { username, password }, context) => {
      const payload = await context.login({
        username,
        password,
      });
      return payload;
    },
    signup: async (parent, args) => {
      return await UserController.signup(args.user);
    },
  },
};
