import sinon from "sinon";
import Video from "../../models/Video.js";

const setup = () => {

  sinon.stub(Video, "find").callsFake(function () {
    return [
      {
        title: "foo",
        url: "http://1",
      },
      {
        title: "bar",
        url: "http://2",
      },
      {
        title: "baz",
        url: "http://3",
      },
      {
        title: "fox",
        url: "http://4",
      },
    ];
  });

  sinon.stub(Video.prototype, "save").callsFake(function () {
    return this;
  });

  return Video;
}

export default setup;
