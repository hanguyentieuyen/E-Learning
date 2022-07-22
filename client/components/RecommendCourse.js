import RecommendCourseCard from "./RecommendCourseCard";
import Ai from "../images/ai.jpg";
const RecommendCourse = () => {
  return (
    <div className="col-xl-9 col-lg-12">
      <div className="recommend-course">
        <div className="recommend-course-header">
          <h4>Recommended Course</h4>
        </div>
        <div className="recommend-course-cards">
          <RecommendCourseCard
            category="HTML"
            name="Front-end Development"
            lesson="30"
            duration="83"
            image={Ai}
          />
          <RecommendCourseCard
            category="Search Engine"
            name="SEO Experts from Zero"
            lesson="25"
            duration="18"
            image={Ai}
          />
          <RecommendCourseCard
            category="UI Design"
            name="Learn Creative Design"
            lesson="35"
            duration="95"
            image={Ai}
          />
          <RecommendCourseCard
            category="UI Design"
            name="Learn Creative Design"
            lesson="35"
            duration="95"
            image={Ai}
          />
        </div>
      </div>
    </div>
  );
};
export default RecommendCourse;
