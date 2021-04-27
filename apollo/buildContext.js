import { login, authenticate, validateJwt } from "../login/loginMiddleware.js";
import { ExtractJwt } from "passport-jwt";
const extractor = ExtractJwt.fromAuthHeaderAsBearerToken();

const done = (err, user) => {
  if (err) throw err;
  return user;
}

const buildContext = ({ req, res }) => ({
  login: async ({ username, password }) => {
    return await login(username, password, done);
  },
  authenticate: async () => {
    const token = extractor(req)
    return await authenticate(await validateJwt(token), done);
  },
});
export default buildContext;
