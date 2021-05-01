import mocha from "mocha";
import chai from "chai";

const expect = chai.expect;

import { encrypt, check } from "../../login/password.js";

describe("Password", function () {
  it("should return false with wrong pw", async function () {
    const pw = "foo";
    const encrypted = await encrypt(pw);
    expect(check("bar", encrypted)).eventually.to.be.false;
  });
  it("plaintext should match", async function () {
    const pw = "foo";
    const encrypted = await encrypt(pw);
    expect(check(pw, encrypted)).eventually.to.be.true;
  });
});
