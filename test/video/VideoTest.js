import { expect } from "chai";
import sinon from "sinon";

import VideoCtrl from "../../controllers/VideoController.js";
import setup from "../mocks/Video.js";
import User from "../mocks/User.js";

const Video = setup();

describe("findRandom", async function () {
  const createRandArr = async () =>
    Promise.all(
      Array.from({ length: 8 }, async () => await VideoCtrl.findRandom(new User()))
    );

  it("should return one video", async function () {
    const video = await VideoCtrl.findRandom(new User());
    expect(video).to.be.an("object");
    expect(video).to.have.a.property("title");
  });

  it("should not return empty", function () {
    const arr = createRandArr();
    expect(arr).to.not.include({});
  });

  it("should return different videos", async function () {
    const randomVideos = await createRandArr();
    const set = new Set(randomVideos.map((v) => v.title));
    expect(set).to.have.lengthOf.above(1);
  });

  after(function () {
    sinon.restore();
  });
});

describe("createVideo", async function () {
  const Video = setup();
  it("Should return a Video", async function () {
    const saved = await VideoCtrl.addVideo();
    expect(saved).to.be.an("object");
    expect(saved).to.be.an.instanceOf(Video);
  });

  it("Saves the right parameters", async function () {
    const saved = await VideoCtrl.addVideo({
      title: "testTitle",
      url: "http://test",
    });
    expect(saved).to.have.a.property("title", "testTitle");
    expect(saved).to.have.a.property("url", "http://test");
  });

  after(function () {
    sinon.restore();
  });
});
