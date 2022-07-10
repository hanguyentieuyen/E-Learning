import React from "react";
import MainNav from "../../components/MainNav";
import Profile from "../../components/Profile";
import { FaHeart, FaBars } from "react-icons/fa";

const LayoutProfile = ({ handleToggleSidebar }) => {
  return (
    <main>
      <div>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
      </div>
      <MainNav title="Profile" />
      <Profile />
    </main>
  );
};

export default LayoutProfile;
