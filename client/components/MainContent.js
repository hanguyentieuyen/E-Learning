import React from 'react';


import { FaHeart, FaBars } from 'react-icons/fa';


const Main = ({
  collapsed,
  handleToggleSidebar,
  
}) => {

  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>
          {/* <img width={80} src={reactLogo} alt="react logo" /> {intl.formatMessage({ id: 'title' })} */}
        </h1>
      </header>
      
      <footer>
       <p>HaNguyenTieuYen</p>
      </footer>
    </main>
  );
};

export default Main;