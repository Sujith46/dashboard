import React from "react";
import "./Drawer.scss";

function Drawer() {
  return (
    <div className="Drawer">
      <div className="Drawer__Header">
        <h1 className="Drawer__Title">IMPEKABLE</h1>
      </div>
      <nav className="Drawer__Navigation">
        <li className="Navigation__Home Navigation--item">Home</li>
        <li className="Navigation__DashBoard Navigation--item">Dashboard</li>
        <li className="Navigation__Inbox Navigation--item">Inbox<span className="New">New</span></li>
        <li className="Navigation__Products Navigation--item">Products</li>
      </nav>
    </div>
  );
}

export default Drawer;
