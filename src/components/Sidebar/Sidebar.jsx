import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Setting } from "../../assets/images/setting 1.svg";
import Icon from "../../assets/icons/icons.svg";

const Sidebar = ({ categories, onSelectedCategory, selectedCategory }) => {
  const Icons = (category, className = "sidebar_icon", stroke = "#9197B3") => {
    const categoryLowerCase = category.replace(/\s+/g, "-").toLowerCase();
    return (
      <svg
        width="24"
        height="24"
        className={className}
        stroke={stroke}
        // stroke={category === selectedCategory ? "#FFFFFF" : "#9197B3"}
      >
        <use href={Icon + `#icon-${categoryLowerCase}`} />
      </svg>
    );
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Dashboard":
        return Icons(category);
      case "Product":
        return Icons(category);
      case "Customers":
        return Icons(category);
      case "Income":
        return Icons(category);
      case "Promote":
        return Icons(category);
      case "Help":
        return Icons(category);
      default:
        return null;
    }
  };

  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_header">
        <Setting className="sidebar_logo_setting" />
        <h2>Dashboard</h2>
        <p>v.01</p>
      </div>
      <ul className="sidebar_list">
        {categories.map((category) => (
          <li key={category} className="sidebar_item">
            <NavLink
              to={`/${category}`}
              onClick={() => onSelectedCategory(category)}
              className={({ isActive }) => {
                return isActive ? "active_link" : "inactive_link";
              }}
            >
              {getCategoryIcon(category)}
              {/* {Icons(category)} */}
              {category}
              {/* {category !== "Dashboard" &&
                (category !== selectedCategory ? (
                  <ChevronGrey className="sidebar_chevron" />
                ) : (
                  <ChevronWhite className="sidebar_chevron" />
                ))} */}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
