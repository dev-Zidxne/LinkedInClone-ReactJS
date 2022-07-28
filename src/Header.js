import React from "react";
import "./Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import HeaderOption from "./HeaderOption";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
function Header() {
  return (
    <div className="header">
      <div className="header__left" src="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
      </div>
      <div className="header__search">
        <SearchRoundedIcon />
        <input type="text" />
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeRoundedIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://i.pinimg.com/564x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
