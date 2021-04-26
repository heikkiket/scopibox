import passport from "passport";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const tokenExpirationTime = 60;

const detectLogin = async (username, password) => {
  let users = await User.find({ username: username, password: password });
  return filteredUsers(users);
};

const filteredUsers = (users) => {
  return users.map((u) => {
    delete u.password;
    return u;
  });
};
const findUser = async (username) => {
  const user = await User.find({ username: username });
  if (user.length === 1) return filteredUsers(user).shift();
  else return false;
};

const found = (users) => users.length === 1;

const createJwt = (user) =>
  jwt.sign(user, process.env.SECRET, {
    expiresIn: tokenExpirationTime,
  });

const payload = (users) => {
  if (found(users)) {
    const user = { username: users.shift().username };
    return { token: createJwt(user), user };
  }
  return [];
};

const login = async (username, password, done) => {
  const users = await detectLogin(username, password);
  const error = found(users) ? null : new Error("No matching user!");

  return done(error, payload(users));
};

const authenticate = async (payload, done) => {
  if(!payload)
    return done(new Error(), null)
  const user = await findUser(payload.username);
  if (user) {
    return done(null, user)
  }
  return done(new Error(), null)
};

export { login, authenticate };
