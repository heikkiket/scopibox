import { expect } from "chai";

import VideoCtrl from "../../controllers/VideoController.js";
import UserCtrl from "../../controllers/UserController.js";
import User from "../mocks/User.js";

describe("User watching videos", function () {
  let user;
  beforeEach(async function () {
    user = new User();
    const video = await VideoCtrl.findRandom(user);
  });

  it("should have empty history when no videos watched", function () {
    const user1 = new User();
    expect(user1.history).to.be.empty;
  });

  it("should grow its history when watching", async function () {
    expect(user.history).to.be.length(1);
  });

  it("should have url and date in the history", async function () {
    expect(user.history[0]).to.have.a.property("url");
    expect(user.history[0]).to.have.a.property("date");
  });

  it("should save current date to history", async function () {
    expect(user.history[0].date.toUTCString()).to.equal(
      new Date().toUTCString()
    );
  });
});

describe("User asking random videos", function () {
  it("should save videos to user history", async function () {
    const user = new User();
    const video = await VideoCtrl.findRandom(user);
    expect(user.history).to.be.length(1);
  });

  it("should return each only once", async function () {
    const user2 = new User();
    const results = new Array();
    // test only 4 videos, because thats how many we have in the mock
    for (let i = 0; i < 4; i++) {
      const next = await VideoCtrl.findRandom(user2);
      expect(results).to.not.deep.include(next);
      results.push(next);
    }
  });

  it("should return empty when no videos", async function () {
    const user2 = new User();

    await VideoCtrl.findRandom(user2);
    await VideoCtrl.findRandom(user2);
    await VideoCtrl.findRandom(user2);
    await VideoCtrl.findRandom(user2);
    const fifth = await VideoCtrl.findRandom(user2);
    expect(fifth).to.be.an("array").with.length(0);
  });
});

describe("User's video history", function () {
  it("should require user", async function () {
    const user = new User();
    return expect(VideoCtrl.history())
      .to.eventually.be.rejectedWith("No user defined!")
      .and.be.an.instanceOf(Error);
  });

  it("should return an empty list", async function () {
    const user = new User();
    return expect(VideoCtrl.history(user))
      .to.eventually.be.an("array")
      .with.length(0);
  });

  it("should be not empty when watched videos", async function () {
    const user = new User();
    await VideoCtrl.findRandom(user);
    return expect(VideoCtrl.history(user))
      .to.eventually.be.an("array")
      .with.length(1);
  });

  it("should contain actual videos", async function() {
    const user = new User();
    await VideoCtrl.findRandom(user);
    const history = await VideoCtrl.history(user)
    expect(history[0]).to.have.a.property("url")
    expect(history[0]).to.have.a.property("title")
  })

});
