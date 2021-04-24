import assert from "assert";

import dbHandler from "./db-handler.js";
import Video from "../models/Video.js";

describe("Video Model", function () {
  before(function () {
    dbHandler.connect();
  });

  after(function () {
    dbHandler.closeDatabase();
  });

  beforeEach(function () {
    dbHandler.clearDatabase();
  });

  it("creates a new video", function (done) {
    const video = new Video();
    done();
  });

  it("has an URL and a title", function (done) {
    const video = new Video({ url: "foo", title: "Test title" });
    assert(video.url);
    assert(video.title);
    done();
  });

  it("can save itself", async function () {
    const video = new Video({ title: "My test video" });
    const dbRecord = await video.save();
    assert(dbRecord.url === video.url);
  });
});
