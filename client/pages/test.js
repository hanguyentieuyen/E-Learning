import Darkmode from "../components/Darkmode";
import MainNav from "../components/MainNav";
import ReactPlayer from "react-player";
const Test = () => {
  return (
    <div className="wrapper">
      {/* <Darkmode /> */}
      <MainNav title="Course" />

      <div className="lesson-wrapper">
        <div className="course-lesson">Các bài học</div>
        <div className="lesson-video container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
            width="100%"
            height="360px"
            playing={true}
            controls={true}
          />
          <div className="lesson-info">nôi dung chung khóa học</div>
        </div>
      </div>
    </div>
  );
};

export default Test;
