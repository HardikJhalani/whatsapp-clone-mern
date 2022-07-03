import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar_chat.css";

function Sidebar_chat() {
  return (
    <div className="sidebar-chat">
      <div className="sidebar-chat-icon">
        <Avatar className="mypic" />
      </div>
      <div className="sidebar-chat-content">
        <h3 className="name">Aas</h3>
        <h4 className="message">asas</h4>
      </div>
    </div>
  );
}

export default Sidebar_chat;
