import sinon from "sinon";
import Video from "../../models/Video.js";

const setup = () => {

  sinon.stub(Video, "find").callsFake(function () {
    return [
      {
        title: "foo",
        url: "http://",
      },
      {
        title: "bar",
        url: "http://",
      },
      {
        title: "baz",
        url: "http://",
      },
      {
        title: "fox",
        url: "http://",
      },
    ];
  });

  sinon.stub(Video.prototype, "save").callsFake(function () {
    return new Video({ title: this.title, url: this.url });
  });

  return Video;
}

export default setup;
