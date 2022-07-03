import React from "react";
import "./sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Avatar, IconButton } from "@mui/material";
import Sidebar_chat from "./sidebar_chat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-left">
          <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/217815176_741784190114712_6986526512662673842_n.jpg?ccb=11-4&oh=b8c701e148608d68893987469a8d7982&oe=62D051F4" />
        </div>

        <div className="sidebar-header-left"></div>
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-container">
          <SearchIcon />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      <div className="archive-bar">
        <div className="archive-btn">
          <ArchiveIcon />
        </div>
        <div className="text-content">
          <h4>Archived</h4>
        </div>
      </div>

      <div className="sidebar-chats">
        <Sidebar_chat />
        <Sidebar_chat />
        <Sidebar_chat />
        <Sidebar_chat />
        <Sidebar_chat />
        <Sidebar_chat />
        <Sidebar_chat />
      </div>
    </div>
  );
}

export default Sidebar;
