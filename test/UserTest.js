import chai from "chai";
import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";

const expect = chai.expect;

chai.use(chaiAsPromised);

import UserCtrl, { UserError } from "../controllers/UserController.js";

describe.skip("User login", function () {
  it("should require parameters", async function () {
    await expect(
      UserCtrl.login(),
      "Should fail without parameters"
    ).to.be.rejectedWith(UserError);
  });
  it("should accept only certain keys", async function () {
    await expect(
      UserCtrl.login({ foo: 1, bar: 2 }),
      "Should fail with wrong keys"
    ).to.be.rejectedWith(UserError);

    await expect(
      UserCtrl.login({ username: "testfoo", password: "testfoo" }),
      "Should succeed with right keys"
    ).to.be.eventually.false;
  });

  it("should ask from passport", async function () {

    await expect(UserCtrl.login({ username: "foo", password: "bar" })).to.be
      .eventually.false;
    await expect(
      UserCtrl.login({ username: "user", password: "pass" })
    ).to.be.eventually.equal({ username: "user" });
  });
});
