import Darkmode from "../components/Darkmode";
import { useState } from "react";
import Image from "next/image";
import MainNav from "../components/MainNav";
import ReactPlayer from "react-player";

const Test = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="wrapper">
      {/* <Darkmode /> */}
      <MainNav title="Course" />

      <div className="lesson-wrapper">
        <div className="course-lesson">Các bài học</div>
        <div className="lesson-video container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=43FgE6uCyLw&list=RDGMEM6ijAnFTG9nX1G-kbWBUCJAVM43FgE6uCyLw&start_radio=1&ab_channel=HONNE"
            width="100%"
            height="600px"
            playing={false}
            controls={true}
          />
          <div className="lesson-info">
            <div className="row profile-content">
              <div className="profile-setting col-lg-8">
                <div className="profile-tabs">
                  <div
                    className={
                      toggleState === 1
                        ? "profile-tab-item active"
                        : "profile-tab-item"
                    }
                    onClick={() => toggleTab(1)}
                  >
                    Overview
                  </div>
                  <div
                    className={
                      toggleState === 2
                        ? "profile-tab-item active"
                        : "profile-tab-item"
                    }
                    onClick={() => toggleTab(2)}
                  >
                    Note
                  </div>
                  <div
                    className={
                      toggleState === 3
                        ? "profile-tab-item active"
                        : "profile-tab-item"
                    }
                    onClick={() => toggleTab(3)}
                  >
                    Review
                  </div>
                  <div
                    className={
                      toggleState === 4
                        ? "profile-tab-item active"
                        : "profile-tab-item"
                    }
                    onClick={() => toggleTab(4)}
                  >
                    Q&A
                  </div>
                  <div class="line"></div>
                </div>
                <div className="profile-tab-content">
                  <div
                    className={
                      toggleState === 1 ? "tab-pane active" : "tab-pane"
                    }
                  >
                    Nội dung bài học
                  </div>
                  <div
                    className={
                      toggleState === 2 ? "tab-pane active" : "tab-pane"
                    }
                  >
                    Ghi chú
                  </div>
                  <div
                    className={
                      toggleState === 3 ? "tab-pane active" : "tab-pane"
                    }
                  >
                    Đánh giá
                  </div>
                  <div
                    className={
                      toggleState === 4 ? "tab-pane active" : "tab-pane"
                    }
                  >
                    Câu hỏi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
