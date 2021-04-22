import sinon from "sinon";
import Video from "../../models/Video.js";

sinon.stub(Video, "find").callsFake(function () {
  return [
    {
      title: "foo",
    },
    {
      title: "bar",
    },
    {
      title: "baz",
    },
    {
      title: "fox",
    },
  ];
});

export default Video;
