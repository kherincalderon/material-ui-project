import React from "react";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import { Android } from "@mui/icons-material";
import { Box } from "@mui/system";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          KHRN
        </Typography>
        <Android sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>Search</Search>
        <Icons>Icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
