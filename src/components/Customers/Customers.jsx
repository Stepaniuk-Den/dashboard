import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import contacts from "../../data/contacts";
import Button from "../Button/Button";
import style from "../../shared/mui/muiPagination";
import { ReactComponent as Search } from "../../assets/icons/search 1.svg";
import { Default, Mobile } from "../../shared/reactResponsive/responsive";

const Customers = () => {
  const { isShowMore, setIsShowMore } = useState(false);

  const handleShowMore = (e) => {
    if (e.target === e.currentTarget) {
      console.log(e.target);
      console.log(e.currentTarget);
    }
  };
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
          </Default>
          <li className="customers_category_list_status">Status</li>
        </ul>
      </div>
      <ul className="customers_list">
        {contacts.map((contact) => {
          return (
            <li
              key={contact.id}
              className="customers_list_item"
              onClick={handleShowMore}
            >
              <p className="customers_category_list_name">{contact.name}</p>
              <Default>
                <p className="customers_category_list_company">
                  {contact.company}
                </p>
                <p className="customers_category_list_phone">{contact.phone}</p>
                <p className="customers_category_list_email">{contact.email}</p>
                <p className="customers_category_list_country">
                  {contact.country}
                </p>
              </Default>
              <Button
                className={contact.status ? "active" : "inactive"}
                text={contact.status ? "Active" : "Inactive"}
              />
            </li>
          );
        })}
      </ul>
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
