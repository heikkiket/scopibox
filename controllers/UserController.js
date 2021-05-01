import { login } from "../login/loginMiddleware.js";
import User from '../models/User.js';

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
      if (err) return false;
      else return user;
    });
  },
  signup: async (args) => {
    const { username, password } = args;
    if(username == undefined || password == undefined)
      throw new UserError("You should provide username and password");
    const user = new User({username: username, password: password});
    await user.save();
    return user;
  },
};

export { UserError };
