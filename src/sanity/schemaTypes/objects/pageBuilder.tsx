import React from "react";

import { defineArrayMember, defineType } from "sanity";

export const pageBuilder = defineType({
  name: "pageBuilder",
  type: "array",
  title: "Page Builder",
  of: [defineArrayMember({ type: "row" })],
  description: (
    <>
      This is where you add your page content. The page is made up of rows of content. Each row is split into 12 columns. 
      <br />
      <br />
      To maintain a predictable flow of content, try to keep each row to a maximum of 12
      columns. The number of columns used in each row is calculated and displayed below.
    </>
  ),
});
