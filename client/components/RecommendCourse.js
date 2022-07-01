import CourseCard from "./CourseCard";
import Image from "next/image";
import Ava2 from "../images/Avatar2.png";
import Star from "../images/star.png"
const RecommendCourse = () => {
    return(
        <>
            <h5>Course You're Taking</h5>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope>Course Title</th>
                            <th scope>Lessons Completed</th>
                            <th scope>Duration</th>
                            <th scope>Intractor</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           <td className="taking-courses-list">
                            <Image width="40px" height="40px"src={Star} />
                            UX Design Certificate
                           </td>
                           <td >18/40 (48%)</td>
                           <td >24h 13m 28s</td>
                           <td className="taking-courses-list">
                           <Image width="40px" height="40px" src={Ava2}/>
                            Johnson
                           </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default RecommendCourse;