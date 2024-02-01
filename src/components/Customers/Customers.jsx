import React from "react";
// import React, { useEffect, useRef, useState } from "react";
import contacts from "../../data/contacts";
import { ReactComponent as Search } from "../../assets/icons/search 1.svg";

import Customer from "../Customer/Customer";
import CustomersCategory from "../CustomersCategory/CustomersCategory";
import MuiPagination from "../MuiPagination/MuiPagination";
import { Default } from "../../shared/reactResponsive/responsive";

const Customers = () => {
  // const [filteredContacts, setFilteredContacts] = useState(contacts);

  // const dropdownRef = useRef(null);
  // const filteredContactsRef = useRef(filteredContacts);

  // useEffect(() => {
  //   const handleDocumentClick = (e) => {
  //     const value = Number(e.target.id);
  //     const filtered = contacts.filter((contact) => contact.id === value);
  //     filteredContactsRef.current = filtered;
  //     // setFilteredContacts(filteredContactsRef.current);
  //     setFilteredContacts(filtered);
  //     // if (
  //     //   isShowMore &&
  //     //   filteredContactsRef.current &&
  //     //   // filteredContactsRef.current[0].id !== value
  //     //   !filteredContactsRef.current.contains(e.target)
  //     // ) {
  //     //   setFilteredContacts(filteredContactsRef.current);
  //     //   // setIsShowMore(false);
  //     // }
  //     console.log("filteredContactsRef :", filteredContactsRef.current);

  //     // console.log("dropdownRef.current", dropdownRef.current);
  //     // console.log("event.target", e.target);
  //   };

  //   document.addEventListener("click", handleDocumentClick);
  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [isShowMore]);

  // console.log("filteredContacts :", filteredContacts);
  return (
    <div className="customers_wrapper">
      <div className="customers_category">
        <div className="customers_category-title">
          <div>
            <h3>All Customers</h3>
            <p>Active Members</p>
          </div>
          <div className="input-container">
            <input type="text" name="search" placeholder="Search" />
            <Search className="icon" />
          </div>
        </div>
        <Default>
          <CustomersCategory />
        </Default>
      </div>
      {contacts.map((contact) => (
        <Customer key={contact.id} id={contact.id} contact={contact} />
      ))}
      <MuiPagination />
    </div>
  );
};

export default Customers;
