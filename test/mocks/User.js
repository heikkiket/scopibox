import sinon from "sinon";
import User from "../../models/User.js";

sinon.stub(User, "find").callsFake(function (args) {
  const users = [
    {
      username: "testuser",
      password: "testpass",
    },
  ].filter(u => u.username === args.username );
  if(args.password)
    return users.filter(u => u.password === args.password)
  return users;
});

export default User;
