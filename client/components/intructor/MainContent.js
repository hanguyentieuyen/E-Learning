import React from "react";
import MainNav from "./MainNav";
import OverviewIntructor from "./Overview";
import TopCourse from "./TopCourse";
import Chart from "../Chart";
import { FaHeart, FaBars } from "react-icons/fa";

const Main = ({ handleToggleSidebar }) => {
  return (
    <main>
      <div>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
      </div>
      <MainNav />
      <div className="row mb-4">
        <div className="col-lg-9 col-md-12">
          <OverviewIntructor />
          <Chart />
        </div>
        <div className="community col-lg-3 col-md-12">
          <TopCourse />
        </div>
      </div>
      <div className="row"></div>
    </main>
  );
};

export default Main;
