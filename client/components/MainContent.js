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
        <div className="col-xl-9 col-lg-12 col-md-12">
          <OverviewStudent />
          <TakingCourse />
        </div>
        <div className="community col-xl-3 col-lg-12 col-md-12">
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
