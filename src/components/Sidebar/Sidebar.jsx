import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as Setting } from "../../assets/icons/setting 1.svg";
// import Icon from "../../assets/icons/icons.svg";
import avatar from "../../assets/images/avatar.webp";
import { Default, Mobile } from "../../shared/reactResponsive/responsive";

import { FiAlignJustify } from "react-icons/fi";
import Button from "../Button/Button";
import ModalBurger from "../ModalBurger/ModalBurger";
import SidebarList from "../SidebarList/SidebarList";

const Sidebar = ({ categories, onSelectedCategory, selectedCategory }) => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isShowBurgerModal, setIsShowBurgerModal] = useState(false);

  // const Icons = (category, className = "sidebar_icon") => {
  //   const categoryLowerCase = category.replace(/\s+/g, "-").toLowerCase();
  //   return (
  //     <svg
  //       width="24"
  //       height="24"
  //       className={className}
  //       stroke={category === selectedCategory ? "#FFFFFF" : "#9197B3"}
  //     >
  //       <use href={Icon + `#icon-${categoryLowerCase}`} />
  //     </svg>
  //   );
  // };

  // const IconsBroken = (category) => {
  //   const categoryLowerCase = category.replace(/\s+/g, "-").toLowerCase();
  //   return (
  //     <svg width="24" height="24" className="sidebar_icon">
  //       {category === selectedCategory ? (
  //         <use href={Icon + `#icon-${categoryLowerCase}-white`} />
  //       ) : (
  //         <use href={Icon + `#icon-${categoryLowerCase}`} />
  //       )}
  //     </svg>
  //   );
  // };

  // const getCategoryIcon = (category) => {
  //   switch (category) {
  //     case "Dashboard":
  //       return Icons(category);
  //     case "Product":
  //       return IconsBroken(category);
  //     case "Customers":
  //       return IconsBroken(category);
  //     case "Income":
  //       return Icons(category);
  //     case "Promote":
  //       return IconsBroken(category);
  //     case "Help":
  //       return IconsBroken(category);
  //     default:
  //       return null;
  //   }
  // };

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  //   // setLogoutModalOpen(false);
  // };

  const openBurgerMenu = () => {
    setIsShowBurgerModal(!isShowBurgerModal);
  };
  console.log(isShowBurgerModal);

  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_header">
        <Setting className="sidebar_logo_setting" />
        <h2>Dashboard</h2>
        <p>v.01</p>
      </div>
      <Default>
        <SidebarList
          categories={categories}
          onSelectedCategory={onSelectedCategory}
          selectedCategory={selectedCategory}
          stateBurgerModal={isShowBurgerModal}
        />
      </Default>
      <div className="user">
        <div className="user_image_thumb">
          <img className="user_image" src={avatar} alt="avatar" />
        </div>
        <div className="user_info">
          <p className="user_name">Evano</p>
          <p className="user_prof">Project Manager</p>
        </div>
        <Mobile>
          <Button
            className="burger"
            type="button"
            onClick={openBurgerMenu}
            text={<FiAlignJustify className="burger_icon" />}
          />
          <ModalBurger
            categories={categories}
            onSelectedCategory={onSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </Mobile>
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
