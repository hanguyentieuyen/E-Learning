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
import { FaGem, FaHeart, FaSellcast, FaUserCog } from "react-icons/fa";

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
            Header
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <Link href="/student-overview">
              <MenuItem icon={<FaGem />}>Overview</MenuItem>
            </Link>
            <SubMenu title="Chat" icon={<FaUserCog />}></SubMenu>
            <SubMenu title="Courses" icon={<FaHeart />}>
              <MenuItem>Resources</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
            <MenuItem icon={<FaGem />}>Schedule</MenuItem>
            <SubMenu title="Grade" icon={<FaGem />}></SubMenu>
            <Link href="/profile">
              <MenuItem icon={<FaGem />}>Profile</MenuItem>
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
