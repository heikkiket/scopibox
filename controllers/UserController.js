import { login } from "../login/loginMiddleware.js";

class UserError extends Error {
  constructor(message) {
    super(message);
    this.name = "User error";
  }
}

export default {
  login: async (args) => {
    if (args === undefined) throw new UserError("No arguments given");

    const { username, password } = args;
    if (!(username && password)) throw new UserError("No arguments given");

    return await login(username, password, (err, user) => {
      if(err) return false
      else return user
    });
  },
};

export { UserError };
