import React from "react";
import MainNav from "../../components/MainNav";
import { FaHeart, FaBars } from "react-icons/fa";
import ProcessCourse from "./ProcessCourse";

const LayoutCourses = ({ handleToggleSidebar }) => {
  return (
    <main>
      <div>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
      </div>
      <MainNav title="Courses" />
      <ProcessCourse />
    </main>
  );
};

export default LayoutCourses;
