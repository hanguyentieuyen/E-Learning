import React from 'react';
import MainNav from "../components/MainNav"
import OverviewStudent from "../components/OverviewStudent";
import Community from "../components/Community";
import RecommendCourse from "../components/RecommendCourse"
import { FaHeart, FaBars } from 'react-icons/fa';


const Main = ({

  handleToggleSidebar,
  
}) => {

  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <MainNav/>
      <div className="row">
        <div className="overview col-lg-9 col-md-7">
          <OverviewStudent/>
          <RecommendCourse/>
        </div>
        <div className="community col-lg-3 col-md-5">
          <Community/>
        </div>
      </div>
    </main>
  );
};

export default Main;