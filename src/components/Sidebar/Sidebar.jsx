import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Setting } from "../../assets/icons/setting 1.svg";
import avatar from "../../assets/images/avatar.webp";
import { Default, Mobile } from "../../shared/reactResponsive/responsive";

import { FiAlignJustify } from "react-icons/fi";
import Button from "../Button/Button";
import ModalBurger from "../ModalBurger/ModalBurger";
import SidebarList from "../SidebarList/SidebarList";

const Sidebar = ({ categories, onSelectedCategory, selectedCategory }) => {
  const [isShowBurgerModal, setIsShowBurgerModal] = useState(false);

  const openBurgerMenu = () => {
    setIsShowBurgerModal(!isShowBurgerModal);
  };
  console.log(isShowBurgerModal);

  const CallBack = (childData) => {
    return setIsShowBurgerModal(childData);
  };

  useEffect(() => {
    if (!isShowBurgerModal) return;
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isShowBurgerModal]);

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
          {isShowBurgerModal && (
            <ModalBurger
              categories={categories}
              onSelectedCategory={onSelectedCategory}
              selectedCategory={selectedCategory}
              handleCallBack={CallBack}
            />
          )}
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
