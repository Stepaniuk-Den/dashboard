import React from "react";
import PropTypes from "prop-types";

import { AiOutlineClose } from "react-icons/ai";

import Button from "../Button/Button";
import SidebarList from "../SidebarList/SidebarList";

const ModalBurger = ({
  categories,
  onSelectedCategory,
  selectedCategory,
  handleCallBack,
}) => {
  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    handleCallBack(false);
  };

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleClickBtnClose();
    }
  };

  return (
    <div className="modal" onClick={handleClickOverlay}>
      <div className="modal_wrapper">
        <SidebarList
          categories={categories}
          onSelectedCategory={onSelectedCategory}
          selectedCategory={selectedCategory}
          handleClose={handleClickBtnClose}
        />
        <Button
          className="modal_btn-close"
          type="button"
          onClick={handleClickBtnClose}
          text={<AiOutlineClose className="modal_btn-close_icon" />}
        />
      </div>
    </div>
  );
};

ModalBurger.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectedCategory: PropTypes.func.isRequired,
  handleCallBack: PropTypes.func.isRequired,
};

export default ModalBurger;
