import React from "react";
import { Default } from "../../shared/reactResponsive/responsive";

const CustomersCategory = ({ isShowMore }) => {
  return (
    <>
      <ul className="customers_category-list">
        {!isShowMore ? (
          <li className="customers_category-item name">Customer Name</li>
        ) : null}
        <Default>
          <li className="customers_category-item company">Company</li>
          <li className="customers_category-item phone">Phone Number</li>
          <li className="customers_category-item email">Email</li>
          <li className="customers_category-item country">Country</li>
          <li className="customers_category-item status">Status</li>
        </Default>
      </ul>
      {isShowMore && (
        <ul className="customers_category-list">
          <li className="customers_category-item company">Company</li>
          <li className="customers_category-item phone">Phone Number</li>
          <li className="customers_category-item email">Email</li>
          <li className="customers_category-item country">Country</li>
          <li className="customers_category-item status">Status</li>
        </ul>
      )}
    </>
  );
};

export default CustomersCategory;
