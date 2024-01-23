import React from "react";
import contacts from "../../data/contacts";

const Customers = () => {
  return (
    <div className="customers_wrapper">
      <div className="customers_category">
        <div>
          <h3>All Customers</h3>
          <p>Active Members</p>
        </div>
        <input type="text" name="search" />
      </div>
      <ul className="customers_category_list">
        <li>Customer Name</li>
        <li>Company</li>
        <li>Phone Number</li>
        <li>Email</li>
        <li>Country</li>
        <li>Status</li>
      </ul>
      <div className="customers_category_line"></div>
      <ul className="customers_list">
        {contacts.map((contact) => {
          return (
            <>
              <li key={contact.id} className="customers_list_item">
                <p>{contact.name}</p>
                <p>{contact.company}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.country}</p>
                <p>{contact.status}</p>
              </li>
              <div className="customers_list_item_line"></div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Customers;
