import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Setting } from "../../assets/images/setting 1.svg";

const Sidebar = ({ categories, onSelectedCategory }) => {
  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_header">
        <Setting className="sidebar_icon_setting" />
        <h2>Dashboard</h2>
        <p>v.01</p>
      </div>
      <ul className="sidebar_list">
        {categories.map((category) => (
          <li
            key={category}
            className={`sidebar_item_${category
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            <NavLink
              to={`/${category}`}
              onClick={() => onSelectedCategory(category)}
              className={({ isActive }) => {
                return isActive ? "active_link" : "inactive_link";
              }}
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
