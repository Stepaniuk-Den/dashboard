import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as Setting } from "../../assets/icons/setting 1.svg";
import Icon from "../../assets/icons/icons.svg";
import avatar from "../../assets/images/avatar.png";

const Sidebar = ({ categories, onSelectedCategory, selectedCategory }) => {
  const Icons = (category, className = "sidebar_icon") => {
    const categoryLowerCase = category.replace(/\s+/g, "-").toLowerCase();
    return (
      <svg
        width="24"
        height="24"
        className={className}
        stroke={category === selectedCategory ? "#FFFFFF" : "#9197B3"}
      >
        <use href={Icon + `#icon-${categoryLowerCase}`} />
      </svg>
    );
  };

  const IconsBroken = (category) => {
    const categoryLowerCase = category.replace(/\s+/g, "-").toLowerCase();
    return (
      <svg width="24" height="24" className="sidebar_icon">
        {category === selectedCategory ? (
          <use href={Icon + `#icon-${categoryLowerCase}-white`} />
        ) : (
          <use href={Icon + `#icon-${categoryLowerCase}`} />
        )}
      </svg>
    );
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Dashboard":
        return Icons(category);
      case "Product":
        return IconsBroken(category);
      case "Customers":
        return IconsBroken(category);
      case "Income":
        return Icons(category);
      case "Promote":
        return IconsBroken(category);
      case "Help":
        return IconsBroken(category);
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
              {category}
              {category !== "Dashboard" && (
                <svg width="24" height="24" className="sidebar_chevron">
                  {category === selectedCategory ? (
                    <use href={Icon + `#icon-chevron-white`} />
                  ) : (
                    <use href={Icon + `#icon-chevron`} />
                  )}
                </svg>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="user">
        <div className="user_image_thumb">
          <img className="user_image" src={avatar} alt="avatar" />
        </div>
        <div className="user_info">
          <p className="user_name">Evano</p>
          <p className="user_prof">Project Manager</p>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectedCategory: PropTypes.func.isRequired,
};

export default Sidebar;
