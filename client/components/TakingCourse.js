import CourseCard from "../components/homepage/CourseCard";
import Image from "next/image";
import Ava2 from "../images/Avatar2.png";
import Star from "../images/star.png";
const TakingCourse = () => {
  return (
    <div className="taking-course">
      <h5>Course You're Taking</h5>
      <div className="table-wrapper">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope>Course Title</th>
              <th scope>Lessons Completed</th>
              <th scope>Duration</th>
              <th scope>Intructor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="taking-courses-list">
                  <Image width="40px" height="40px" src={Star} />
                  <span>UX Design Certificate</span>
                </div>
              </td>
              <td>
                <div className="taking-courses-list">
                  <span>18/40 (48%)</span>
                </div>
              </td>
              <td>
                <div className="taking-courses-list">
                  <span>24h 13m 28s</span>
                </div>
              </td>
              <td>
                <div className="taking-courses-list">
                  <Image width="40px" height="40px" src={Ava2} />
                  <span>Johnson</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="taking-courses-list">
                  <Image width="40px" height="40px" src={Star} />
                  <span>UX Design Certificate</span>
                </div>
              </td>
              <td>
                <div className="taking-courses-list">
                  <span>18/40 (48%)</span>
                </div>
              </td>
              <td>
                <div className="taking-courses-list">
                  <span>24h 13m 28s</span>
                </div>
              </td>
              <td>
                <div className="taking-courses-list">
                  <Image width="40px" height="40px" src={Ava2} />
                  <span>Johnson</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="taking-courses-list">
                  <Image width="40px" height="40px" src={Star} />
                  <span>UX Design Certificate</span>
                </div>
              </td>
              <td>
                <div className="taking-courses-list">
                  <span>18/40 (48%)</span>
                </div>
              </td>
              <td>
                <div className="taking-courses-list">
                  <span>24h 13m 28s</span>
                </div>
              </td>
              <td>
                <div className="taking-courses-list">
                  <Image width="40px" height="40px" src={Ava2} />
                  <span>Johnson</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TakingCourse;
