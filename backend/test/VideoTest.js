import { expect } from "chai";
import sinon from "sinon";

import VideoCtrl from "../controllers/VideoController.js";
import Video from "./mocks/Video.js";

describe("Video Controller", function () {
  const createRandArr = () => {
    return [
      VideoCtrl.findRandom(),
      VideoCtrl.findRandom(),
      VideoCtrl.findRandom(),
      VideoCtrl.findRandom(),
      VideoCtrl.findRandom(),
      VideoCtrl.findRandom(),
    ];
  }

  it("should return one video", function () {
    expect(VideoCtrl.findRandom()).to.be.an("object");
  });

  it("should not return empty", function () {
    const arr = createRandArr()

    expect(arr).to.not.include({});
  });

  it("should return different videos", function () {
    const arr = createRandArr()
    const set = new Set(arr.map((o) => o.title));
    expect(set).to.have.lengthOf.above(1);
  });
});
