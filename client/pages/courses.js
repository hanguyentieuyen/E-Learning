import Sidebar from "../components/Sidebar";
import React from "react";
import { useState } from "react";
import LayoutCourses from "../components/user/LayoutCourses";

const Courses = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <div className="content-layout">
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <LayoutCourses
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
      />
    </div>
  );
};

export default Courses;
