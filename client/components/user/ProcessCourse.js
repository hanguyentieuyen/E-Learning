import ProcessCourseCard from "./ProcessCourseCard";
import Avatar4 from "../../images/Avatar4.png";
import Avatar3 from "../../images/Avatar3.png";
import Avatar2 from "../../images/Avatar2.png";
import Avatar1 from "../../images/Avatar1.png";
import slack from "../../images/slack.png";
import star from "../../images/star.png";
import teacher from "../../images/teacher.png";
const ProcessCourse = () => {
  return (
    <div className="col-lg-9">
      <div className="process-course">
        <div className="process-course-header">
          <h4>Process Course</h4>
        </div>
        <div className="recommend-process-cards">
          <ProcessCourseCard
            logoimage={slack}
            namecourse=" App Design Course"
            image={Avatar4}
            name="William Joe"
            lesson="40"
            hours="37h45p"
            percent={100}
          />
          <ProcessCourseCard
            logoimage={star}
            namecourse=" Design Thingking"
            image={Avatar3}
            name="William Joe"
            lesson="40"
            hours="37h45p"
            percent={55}
          />
          <ProcessCourseCard
            logoimage={teacher}
            namecourse=" App Design Course"
            image={Avatar2}
            name="William Joe"
            lesson="40"
            hours="37h45p"
            percent={75}
          />
          <ProcessCourseCard
            logoimage={slack}
            namecourse=" App Design Course"
            image={Avatar1}
            name="William Joe"
            lesson="40"
            hours="37h45p"
            percent={25}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessCourse;
