import React from "react";
import "./Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import HeaderOption from "./HeaderOption";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left" src="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
      </div>
      <div className="header__search">
        <SearchRoundedIcon />
        <input placeholder="Search" type="text" />
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeRoundedIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
