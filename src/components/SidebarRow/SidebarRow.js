import React from "react";
import "./SidebarRow.css";

function SidebarRow({ title }) {
  return (
    <div className="sidebarRow">
      <div className="sidebarRow__title">{title}</div>
    </div>
  );
}

export default SidebarRow;

// className={`sidebarRow ${selected && "selected"}`}
