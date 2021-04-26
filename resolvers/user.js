export default {
  Mutation: {
    login: async (parent, { username, password }, context) => {
      const { user } = await context.authenticate("graphql-local", {
        username,
        password,
      });
      return user;
    },
    signup: (parent, args) => {
      console.log(args);
      return args.user;
    },
  },
};
