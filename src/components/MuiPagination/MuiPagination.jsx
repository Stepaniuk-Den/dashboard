import { Stack } from "@mui/system";
import React from "react";
import { Default, Mobile } from "../../shared/reactResponsive/responsive";
import { Pagination } from "@mui/material";
import style from "../../shared/mui/muiPagination";

const MuiPagination = () => {
  return (
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
  );
};

export default MuiPagination;
