import React from "react";
import MainNav from "../components/MainNav";
import OverviewStudent from "../components/OverviewStudent";
import Community from "../components/Community";
import TakingCourse from "../components/TakingCourse";
import RecommendCourse from "../components/RecommendCourse";
import UpcommingClass from "../components/UpcommingClass";
import { FaHeart, FaBars } from "react-icons/fa";

const Main = ({ handleToggleSidebar }) => {
  return (
    <main>
      <div>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
      </div>
      <MainNav title="Overview" />
      <div className="row mb-4">
        <div className="col-lg-9 col-md-12">
          <OverviewStudent />
          <TakingCourse />
        </div>
        <div className="community col-lg-3 col-md-12">
          <Community />
        </div>
      </div>
      <div className="row">
        <RecommendCourse />
        <UpcommingClass />
      </div>
    </main>
  );
};

export default Main;
