import React from "react";
import "./sidebarOption.css";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";
function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    console.log(id);
    if (id) history.push(`/room/${id}`);
    else history.push("title");
  };

  const addChannel = () => {
    const channel = prompt("Please enter channel name");
    if (channel) {
      db.collection("rooms").add({
        name: channel,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          {" "}
          <span className="sidebarOption__hash"># {title}</span>{" "}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
