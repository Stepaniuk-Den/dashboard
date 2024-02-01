import React, { useState } from "react";
import { Default, Mobile } from "../../shared/reactResponsive/responsive";
import Button from "../Button/Button";
import { useMediaQuery } from "react-responsive";

const Customer = ({ contact }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <>
      <div className="customer_wrapper">
        <ul className="customer_list">
          {!isShowMore && isMobile && (
            <li className="customer_list-item name">{contact.name}</li>
          )}
          <Default>
            <li className="customer_list-item name">{contact.name}</li>
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
            className={isShowMore ? "show-less" : "read-more"}
            text={isShowMore ? "Show Less" : "Read More"}
            onClick={handleShowMore}
          />
        </Mobile>
      </div>
      {isShowMore ? (
        <>
          <Mobile>
            <div className="customer_details">
              <ul className="customer_details_list">
                <li className="customer_details-item">
                  <p className="customer_details-text">Customer Name</p>
                  {contact.name}
                </li>
                <li className="customer_details-item">
                  <p className="customer_details-text">Company</p>
                  {contact.company}
                </li>
                <li className="customer_details-item">
                  <p className="customer_details-text">Phone Number</p>
                  {contact.phone}
                </li>
                <li className="customer_details-item">
                  <p className="customer_details-text">Email</p>
                  {contact.email}
                </li>
                <li className="customer_details-item">
                  <p className="customer_details-text">Country</p>
                  {contact.country}
                </li>
                <li className="customer_details-item">
                  <p className="customer_details-text">Status</p>
                  <Button
                    className={contact.status ? "active" : "inactive"}
                    text={contact.status ? "Active" : "Inactive"}
                  />
                </li>
              </ul>
            </div>
            <div className="customer_bottom-border"></div>
          </Mobile>
        </>
      ) : (
        <div className="customer_bottom-border"></div>
      )}
    </>
  );
};

export default Customer;
