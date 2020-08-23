import React from "react";
import "./Sidebar.css";
import { Twitter,Home,Search,NotificationsNone } from "@material-ui/icons";
import SidebarOption from "../sidebarOption/SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Twitter />
      <SidebarOption text="Home" Icon={Home}/>
      <SidebarOption text="Explore" Icon={Search}/>
      <SidebarOption text="Notification" Icon={NotificationsNone}/>
    </div>
  );
};

export default Sidebar;
