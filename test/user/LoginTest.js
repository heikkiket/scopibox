import chai from "chai";

import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";
import bcrypt from "bcrypt";

const expect = chai.expect;

chai.use(chaiAsPromised);

import UserCtrl, { UserError } from "../../controllers/UserController.js";
import { login, authenticate } from "../../login/loginMiddleware.js";

describe("User login", function () {
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
});

describe("Login", function () {
  const done = sinon.fake();

  it("should fail with wrong username", async function () {
    await login("foo", "bar", done);
    expect(done.firstArg).to.be.an("Error");
    expect(done.lastArg).to.have.length(0);
  });

  it("should fail with wrong password too", async function () {
    await login("testuser", "foo", done);
    expect(done.firstArg).to.be.an("Error");
    expect(done.lastArg).to.have.length(0);
  });

  it("should not return exception when user found", async function () {
    await login("testuser", "testpass", done);
    expect(done.firstArg).to.be.null;
  });

  it("should return a right user", async function () {
    await login("testuser", "testpass", done);
    expect(done.lastArg).to.be.an("object");
    expect(done.lastArg.user).to.have.property("username");
    expect(done.lastArg.user).to.not.have.property("password");
  });
});

describe("Token", function () {
  process.env.SECRET = "test";
  const done = sinon.fake();

  it("should have a key", async function () {
    await login("testuser", "testpass", done);
    expect(done.lastArg).to.have.property("token");
  });

  it("should have a value", async function () {
    await login("testuser", "testpass", done);
    expect(done.lastArg.token).to.not.be.empty;
  });
});

describe("Authenticate", function () {
  const done = sinon.fake();

  it("should return error with invalid payload", async function () {
    await authenticate({}, done);
    expect(done.firstArg).to.be.an("Error");
    expect(done.secondArg).to.be.undefined;
  });

  it("should return error with wrong user", async function () {
    await authenticate({ username: "foo" }, done);
    expect(done.firstArg).to.be.an("Error");
    expect(done.secondArg).to.be.undefined;
  });

  it("should not return error with right user", async function () {
    const user = { username: "testuser" };
    await authenticate(user, done);
    expect(done.firstArg).to.be.null;
    expect(done.lastArg).to.have.property("username");
  });
});
