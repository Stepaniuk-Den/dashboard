import React, { useState } from "react";
import { Default } from "../../shared/reactResponsive/responsive";
import Button from "../Button/Button";

const Customer = ({ contacts }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleShowMore = (e) => {
    if (e.target === e.currentTarget) {
      setIsShowMore(!isShowMore);
      // setIsShowMore(true);
    }
  };
  console.log(isShowMore);

  return (
    <div>
      <ul
        className="customers_list"
        // ref={dropdownRef}
      >
        {contacts.map((contact) => {
          return (
            <li
              key={contact.id}
              id={contact.id}
              className="customers_list_item"
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
                <Button
                  className={contact.status ? "active" : "inactive"}
                  text={contact.status ? "Active" : "Inactive"}
                />
              </Default>
              <Button
                className="load-more"
                text={isShowMore ? "Show Less" : "Read More"}
                onClick={handleShowMore}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Customer;
