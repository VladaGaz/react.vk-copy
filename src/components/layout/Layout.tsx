import React, { FC } from "react";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

import Grid from "@mui/material/Grid";
interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} marginX={5} marginTop={2}>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
        <Grid item md={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
