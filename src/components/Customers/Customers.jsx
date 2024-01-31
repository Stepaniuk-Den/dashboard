import React, { useEffect, useRef, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import contacts from "../../data/contacts";
import Button from "../Button/Button";
import style from "../../shared/mui/muiPagination";
import { ReactComponent as Search } from "../../assets/icons/search 1.svg";
import { Default, Mobile } from "../../shared/reactResponsive/responsive";
import Customer from "../Customer/Customer";

const Customers = () => {
  // const [filteredContacts, setFilteredContacts] = useState(null);

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
        <div className="customers_category_title">
          <div>
            <h3>All Customers</h3>
            <p>Active Members</p>
          </div>
          <div className="input-container">
            <input type="text" name="search" placeholder="Search" />
            <Search className="icon" />
          </div>
        </div>
        <ul className="customers_category_list">
          <li className="customers_category_list_name">Customer Name</li>
          <Default>
            <li className="customers_category_list_company">Company</li>
            <li className="customers_category_list_phone">Phone Number</li>
            <li className="customers_category_list_email">Email</li>
            <li className="customers_category_list_country">Country</li>
            <li className="customers_category_list_status">Status</li>
          </Default>
        </ul>
      </div>
      <Customer contacts={contacts} />
      <div className="customers_pagination">
        <p>Showing data 1 to 8 of 256K entries</p>
        <Stack spacing={4}>
          <Default>
            <Pagination
              count={40}
              variant="outlined"
              shape="rounded"
              sx={style}
            />
          </Default>
          <Mobile>
            <Pagination
              count={40}
              variant="outlined"
              shape="rounded"
              sx={style}
              siblingCount={0}
            />
          </Mobile>
        </Stack>
      </div>
    </div>
  );
};

export default Customers;
