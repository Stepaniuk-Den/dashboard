import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ categories, onSelectedCategory }) => {
  return (
    <div className="sidebar_wrapper">
      <h2>Категорії</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/${category}`}
              onClick={() => onSelectedCategory(category)}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
