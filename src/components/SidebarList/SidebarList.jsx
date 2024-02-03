import React from "react";
import Icon from "../../assets/icons/icons.svg";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

const SidebarList = ({
  categories,
  onSelectedCategory,
  selectedCategory,
  handleClose,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
      case "Dashboards":
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

  const handleClickClose = (category) => {
    onSelectedCategory(category);
    if (!isMobile) return;
    handleClose();
  };
  return (
    <ul className="sidebar_list">
      {categories.map((category) => (
        <li key={category} className="sidebar_item">
          <NavLink
            to={`/${category}`}
            onClick={() => handleClickClose(category)}
            className={({ isActive }) => {
              return isActive ? "active_link" : "inactive_link";
            }}
          >
            {getCategoryIcon(category)}
            {category}
            {category !== "Dashboards" && (
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
  );
};

SidebarList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectedCategory: PropTypes.func.isRequired,
  handleClose: PropTypes.func,
};

export default SidebarList;
