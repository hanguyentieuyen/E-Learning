import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { useState } from 'react';

function LayoutSidebar() {
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
      <MainContent
        
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
        
      />
    </div>
  );
}

export default LayoutSidebar;