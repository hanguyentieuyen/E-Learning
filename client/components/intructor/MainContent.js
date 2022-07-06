import React from 'react';
import MainNav from './MainNav';
import Overview from './Overview';
import { FaHeart, FaBars } from 'react-icons/fa';

const Main = ({

  handleToggleSidebar,
  
}) => {

  return (
    <main>
      <div>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
      
      </div>
      <MainNav/>
      <div className="row mb-4">
        <div className="col-lg-9 col-md-12">
          <Overview/>
          {/* <TakingCourse/> */}
        </div>
        <div className="community col-lg-3 col-md-12">
          {/* <Community/> */}
        </div>
      </div>
      <div className="row">
        {/* <RecommendCourse/>
        <UpcommingClass/> */}
      </div>
    </main>
  );
};

export default Main;