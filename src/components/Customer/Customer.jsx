import React, { useState } from "react";
import { Default, Mobile } from "../../shared/reactResponsive/responsive";
import Button from "../Button/Button";
import CustomersCategory from "../CustomersCategory/CustomersCategory";

const Customer = ({ contact }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <>
      <div className="customer_wrapper">
        <ul className="customer_list">
          {!isShowMore && (
            <li className="customer_list-item name">{contact.name}</li>
          )}
          <Default>
            <li className="customer_list-item company">{contact.company}</li>
            <li className="customer_list-item phone">{contact.phone}</li>
            <li className="customer_list-item email">{contact.email}</li>
            <li className="customer_list-item country">{contact.country}</li>
            <Button
              className={contact.status ? "active" : "inactive"}
              text={contact.status ? "Active" : "Inactive"}
            />
          </Default>
        </ul>
        <Mobile>
          <Button
            className="load-more"
            text={isShowMore ? "Show Less" : "Read More"}
            onClick={handleShowMore}
          />
        </Mobile>
      </div>
      {isShowMore && <CustomersCategory isShowMore={isShowMore} />}
      <div className="customer_bottom-border"></div>
    </>
  );
};

export default Customer;
