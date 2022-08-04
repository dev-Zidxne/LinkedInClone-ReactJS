import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Batman is back!", "Top news - 120,000 readers")}
      {newsArticle("Bitcoin Rises", "Crypto - 14,000 readers")}
      {newsArticle("Recession Looming?", "Finance - 10,000 readers")}
      {newsArticle("New Webb Images ", "NASA - 21,000 readers")}
      {newsArticle("React too powerful?", "Code - 12,000 readers")}
    </div>
  );
}
export default Widgets;
