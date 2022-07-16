import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import Switch from "react-switch";
import Link from "next/link";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaSellcast,
  FaUserCog,
  FaBook,
  FaCommentDots,
  FaCalendarDay,
  FaBorderAll,
} from "react-icons/fa";

const Sidebar = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  return (
    <div className="content-height">
      <ProSidebar
        className="sidebar"
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            E-Learning
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <Link href="/student-overview">
              <MenuItem icon={<FaBorderAll />}>Overview</MenuItem>
            </Link>
            <Link href="/courses">
              <MenuItem icon={<FaBook />}>Courses</MenuItem>
            </Link>
            <SubMenu title="Chat" icon={<FaCommentDots />}></SubMenu>
            <MenuItem icon={<FaCalendarDay />}>Schedule</MenuItem>

            <Link href="/profile">
              <MenuItem icon={<FaUserCog />}>Profile</MenuItem>
            </Link>
            <SubMenu title="Setting" icon={<FaSellcast />}></SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: "center" }}>
          <div className="block ">
            <Switch
              height={16}
              width={30}
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleCollapsedChange}
              checked={collapsed}
              onColor="#219de9"
              offColor="#bbbbbb"
            />
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};
export default Sidebar;
