import { Stack } from "@mui/system";
import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Default, Mobile } from "../../shared/reactResponsive/responsive";
import { Pagination } from "@mui/material";
import style from "../../shared/mui/muiPagination";

const MuiPagination = ({ totalContacts, filteredContacts, handleCallBack }) => {
  const [activePage, setActivePage] = useState(1);

  const contactPerPage = 8;

  const handleChange = (event, value) => {
    setActivePage(value);
  };

  const countPage = Math.ceil(totalContacts / contactPerPage);
  const startIndex = (activePage - 1) * contactPerPage;
  const endIndex = startIndex + contactPerPage;
  const endOfPage = !Boolean(
    totalContacts / contactPerPage < activePage && totalContacts
  )
    ? activePage * contactPerPage
    : totalContacts;

  const displayedContacts = useMemo(() => {
    return filteredContacts.slice(startIndex, endIndex);
  }, [filteredContacts, startIndex, endIndex]);

  useEffect(() => {
    handleCallBack(displayedContacts);
  }, [displayedContacts, handleCallBack]);

  return (
    <div className="customers_pagination">
      <p>
        Showing data {startIndex + 1} to {endOfPage} of {totalContacts} entries
      </p>
      <Stack spacing={4}>
        <Default>
          <Pagination
            count={countPage}
            page={activePage}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            sx={style}
          />
        </Default>
        <Mobile>
          <Pagination
            count={countPage}
            page={activePage}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            sx={style}
            siblingCount={0}
          />
        </Mobile>
      </Stack>
    </div>
  );
};

MuiPagination.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalContacts: PropTypes.number.isRequired,
  handleCallBack: PropTypes.func.isRequired,
};

export default MuiPagination;
