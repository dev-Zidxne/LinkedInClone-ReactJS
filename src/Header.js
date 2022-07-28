import React from "react";
import "./Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
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
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
