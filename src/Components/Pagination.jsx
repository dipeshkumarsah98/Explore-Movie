import React from "react";
import { Pagination as Page } from "@mui/material";
import { Stack } from "@mui/material";

const Pagination = ({ totalItem, pageChange, pageSize }) => {
  const pageCount = Math.ceil(totalItem / (pageSize || 15));
  const pages = [];
  if (pageCount === 1) return null;

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  const handleChange = (event, value) => {
    pageChange(value);
  };
  return (
    <Stack spacing={2} className="items-center my-10">
      <Page count={pages.length} onChange={handleChange} color="primary" />
    </Stack>
  );
};

export default Pagination;
