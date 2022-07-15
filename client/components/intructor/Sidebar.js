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
  FaGem,
  FaUserGraduate,
  FaUserCog,
  FaMoneyCheckAlt,
  FaBook,
  FaCommentDots,
  FaVideo,
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
            <Link href="/intructor-overview">
              <MenuItem icon={<FaBorderAll />}>Overview</MenuItem>
            </Link>
            <Link href="/studentlist">
              <SubMenu title="Student" icon={<FaUserGraduate />}></SubMenu>
            </Link>
            <SubMenu title="Courses" icon={<FaBook />}>
              <MenuItem></MenuItem>
            </SubMenu>
            <Link href="/transaction">
              <MenuItem icon={<FaMoneyCheckAlt />}>Transaction</MenuItem>
            </Link>
            <MenuItem icon={<FaCommentDots />}>Chat</MenuItem>
            <MenuItem icon={<FaCalendarDay />}>Schedule</MenuItem>
            <SubMenu title="Live Class" icon={<FaVideo />}></SubMenu>
            <Link href="/profile">
              <SubMenu title="Profile" icon={<FaUserCog />}></SubMenu>
            </Link>
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
