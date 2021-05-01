import chai from "chai";
import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";

const expect = chai.expect;

chai.use(chaiAsPromised);

import UserCtrl, { UserError } from "../../controllers/UserController.js";

describe("Signup", function () {
  it("Should require username and password", async function () {
    await expect(
      UserCtrl.signup({ foo: "foo", bar: "bar" })
    ).to.be.rejectedWith(UserError);
    await expect(
      UserCtrl.signup({ foo: "foo", password: "bar" })
    ).to.be.rejectedWith(UserError);
    await expect(
      UserCtrl.signup({ username: "foo", bar: "bar" })
    ).to.be.rejectedWith(UserError);
    await expect(
      UserCtrl.signup({ username: "foo", password: "bar" })
    ).not.to.be.rejectedWith(UserError);
  });

  it("Should return user", async function () {
    const signedup = await UserCtrl.signup({
      username: "testuser",
      password: "testpass",
    });
    expect(signedup).to.be.an("object");
    expect(signedup).to.have.a.property("username");
    expect(signedup).to.have.a.property("_id");
  });

});
