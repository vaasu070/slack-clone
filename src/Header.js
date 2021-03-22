import React from "react";
import Avatar from "@material-ui/core/Avatar";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "./header.css";

import { useStateValue } from "./StateProvider";

function Header(props) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar alt={user?.displayName} src={user?.photoURL} />

        <AccessTimeIcon />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="search clever progremmer" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
