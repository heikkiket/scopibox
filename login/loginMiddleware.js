import { ForbiddenError } from "apollo-server-errors";

import User from "../models/User.js";
import { createJwt, validateJwt } from "./jwt.js";
import { check } from './password.js';

const detectLogin = async (username, password) => {
  let users = await User.find({ username: username });
  if(found(users) && await check(password, users[0].password))
    return filteredUsers(users);
  else return []
};

const filteredUsers = (users) => {
  return users.map((u) => {
    delete u.password;
    return u;
  });
};

const findUser = async (username) => {
  const user = await User.find({ username: username });
  if (found(user)) return filteredUsers(user).shift();
  else return false;
};

const found = (users) => users.length === 1;

const payload = (users) => {
  if (found(users)) {
    const user = { username: users.shift().username };
    return { token: createJwt(user), user };
  }
  return [];
};

const login = async (username, password, done) => {
  const users = await detectLogin(username, password);
  const error = found(users) ? null : new ForbiddenError("No matching user!");

  return done(error, payload(users));
};

const authenticate = async (payload, done) => {
  if (!payload) return done(new ForbiddenError("Empty token payload"), null);
  const user = await findUser(payload.username);
  if (user) {
    return done(null, user);
  }
  return done(new ForbiddenError("No loggedin user"), null);
};

export { login, authenticate, validateJwt };
