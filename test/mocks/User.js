import sinon from "sinon";
import User from "../../models/User.js";

sinon.stub(User, "find").callsFake(function (args) {
  const users = [
    {
      username: "testuser",
      //testpass
      password: "$2b$12$HDPBuW1L3SqCHsIq10ukAOrmGG1kBIVZ/lxVPUvEFPUq0CLtYt1oe",
    },
  ].filter(u => u.username === args.username );

  return users;
});

sinon.stub(User.prototype, "save").callsFake(async function (args) {
  return this;
})

export default User;
