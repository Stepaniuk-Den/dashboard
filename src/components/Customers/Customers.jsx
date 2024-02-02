import React, { useEffect, useState } from "react";
import contacts from "../../data/contacts";
import { ReactComponent as Search } from "../../assets/icons/search 1.svg";

import Customer from "../Customer/Customer";
import CustomersCategory from "../CustomersCategory/CustomersCategory";
import MuiPagination from "../MuiPagination/MuiPagination";
import { Default } from "../../shared/reactResponsive/responsive";

const Customers = () => {
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [totalContacts, setTotalContacts] = useState(contacts.length);
  const [inputValue, setInputValue] = useState("");
  const [displayedContacts, setDisplayedContacts] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredContacts(filtered);
  };

  const CallBack = (childData) => {
    return setDisplayedContacts(childData);
  };

  useEffect(() => {
    if (totalContacts === filteredContacts.length) return;
    const totalFilteredContacts = filteredContacts.length;
    setTotalContacts(totalFilteredContacts);
  }, [filteredContacts, totalContacts]);

  return (
    <div className="customers_wrapper">
      <div className="customers_category">
        <div className="customers_category-title">
          <div>
            <h3>All Customers</h3>
            <p>Active Members</p>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Search className="icon" />
          </div>
        </div>
        <Default>
          <CustomersCategory />
        </Default>
      </div>
      {displayedContacts &&
        displayedContacts.map((contact) => (
          <Customer key={contact.id} id={contact.id} contact={contact} />
        ))}
      <MuiPagination
        totalContacts={totalContacts}
        filteredContacts={filteredContacts}
        handleCallBack={CallBack}
      />
    </div>
  );
};

export default Customers;
