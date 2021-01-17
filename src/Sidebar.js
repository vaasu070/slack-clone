import React, { useEffect, useState } from "react";
import "./sidebar.css";
import CreateIcon from "@material-ui/icons/Create";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import { db } from "./firebase";

function Sidebar(props) {
  const [Channels, setChannles] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannles(
        snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Vaasu Varma
          </h3>
        </div>
        <CreateIcon />
      </div>

      <SidebarOption Icon={InsertCommentIcon} title={"Threads"} />
      <SidebarOption Icon={InboxIcon} title={"Mentioned & reactions"} />
      <SidebarOption Icon={DraftsIcon} title={"Saved items"} />
      <SidebarOption Icon={BookmarkBorderIcon} title={"Channel browser"} />
      <SidebarOption Icon={PeopleAltIcon} title={"People & user groups"} />
      <SidebarOption Icon={AppsIcon} title={"Apps"} />
      <SidebarOption Icon={FileCopyIcon} title={"File browser"} />
      <SidebarOption Icon={ExpandLessIcon} title={"Show kess"} />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title={"Channels"} />
      <hr />
      <SidebarOption Icon={AddIcon} title={"Add Channel"} addChannelOption={true} />

      {Channels.map(({ id, name }) => (
        <SidebarOption title={name} key={id} id={id} />
      ))}
    </div>
  );
}

export default Sidebar;
