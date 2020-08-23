import React from "react";
import "./Sidebar.css";
import {
  Twitter,
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import SidebarOption from "../sidebarOption/SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Twitter />
      <SidebarOption active text="Home" Icon={Home} />
      <SidebarOption text="Explore" Icon={Search} />
      <SidebarOption text="Notification" Icon={NotificationsNone} />
      <SidebarOption text="Messages" Icon={MailOutline} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarOption text="Lists" Icon={ListAlt} />
      <SidebarOption text="Profile" Icon={PermIdentity} />
      <SidebarOption text="More" Icon={MoreHoriz} />
    </div>
  );
};

export default Sidebar;
