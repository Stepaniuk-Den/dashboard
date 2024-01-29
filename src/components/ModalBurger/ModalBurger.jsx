import React, { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";
// import { selectIsShowBurgerModal } from "../../../redux/Modal/modalSelectors";
// import {
//   toggleShowAuthPage,
//   toggleShowBurgerModal,
// } from "../../../redux/Modal/modalSlice";
// import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import SidebarList from "../SidebarList/SidebarList";
// import BtnRegister from "../components/ButtonRegister/ButtonRegister";
// import BtnLogin from "../components/ButtonLogin/ButtonLogin";
// import { selectIsAuth } from "../../../redux/user/userSelectors";
// import LogoutModal from "../../homepage/components/ModalLogOut/ModalLogOut";

const ModalBurger = ({
  categories,
  onSelectedCategory,
  selectedCategory,
  handleCallBack,
}) => {
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const dropdownRef = useRef(null);

  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isShowBurgerModal, setIsShowBurgerModal] = useState(false);
  // const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  // const isShowBurgerModal = useSelector(selectIsShowBurgerModal);
  // const hasToken = useSelector(selectIsAuth);

  // useEffect(() => {
  //   if (!isShowBurgerModal) return;
  //   document.body.classList.add("no-scroll");
  //   return () => {
  //     document.body.classList.remove("no-scroll");
  //   };
  // }, [isShowBurgerModal]);

  // useEffect(() => {
  //   const handleDocumentClick = (event) => {
  //     if (
  //       isDropdownOpen &&
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target)
  //     ) {
  //       setDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleDocumentClick);
  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [isDropdownOpen]);

  // const handleOpenModal = (e) => {
  //   dispatch(toggleShowAuthPage(e.currentTarget.name));
  //   dispatch(toggleShowBurgerModal());
  // };

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    // dispatch(toggleShowBurgerModal());
    // setIsShowBurgerModal(false);
    handleCallBack(isShowBurgerModal);
  };

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      // handleClickBtnClose();
    }
  };

  // const navItems = [
  //   { to: "/home" || "/lastPassed", label: "Home" },
  //   { to: "/discover", label: "Discover" },
  //   { to: "/favorite", label: "Favorite quize" },
  //   { to: "/ownquiz", label: "My quize" },
  // ];

  // const generateNavLinks = (hasToken) => {
  //   return navItems.map((item, index) => (
  //     <Link key={index} to={item.to}>
  //       <NavItem
  //         className={location.pathname === item.to ? "active" : ""}
  //         onClick={handleClickBtnClose}
  //       >
  //         {item.label}
  //       </NavItem>
  //     </Link>
  //   ));
  // };

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  //   setLogoutModalOpen(false);
  // };

  // const openLogoutModal = () => {
  //   setLogoutModalOpen(true);
  // };

  return (
    // isShowBurgerModal && (
    <div className="modal">
      <div className="modal_wrapper">
        <SidebarList
          categories={categories}
          onSelectedCategory={onSelectedCategory}
          selectedCategory={selectedCategory}
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
  // );
};

export default ModalBurger;
