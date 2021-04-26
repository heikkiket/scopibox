export default {
  Mutation: {
    login: async (parent, { username, password }, context) => {
      const payload = await context.login({
        username,
        password,
      });
      return payload
    },
    signup: (parent, args) => {
      return args.user;
    },
  },
};
