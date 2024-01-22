import React from "react";
import contacts from "../../data/contacts";

const Customers = () => {
  return (
    <div className="customers_wrapper">
      <div>
        <div>
          <h3>All Customers</h3>
          <p>Active Members</p>
        </div>
        <input type="text" name="search" />
      </div>
      <ul className="customers_list">
        <li className="customers_list_name">
          <p>Customer Name</p>
          <p>Company</p>
          <p>Phone Number</p>
          <p>Email</p>
          <p>Country</p>
          <p>Status</p>
        </li>
        <div className="customers_list_line"></div>
        {contacts.map((contact) => {
          return (
            <>
              <li className="customers_list_item">
                <p>{contact.name}</p>
                <p>{contact.company}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.country}</p>
                <p>{contact.status}</p>
              </li>
              <div className="customers_list_line"></div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Customers;
