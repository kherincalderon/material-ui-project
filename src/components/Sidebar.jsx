import React from "react";
import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <h1>Sidebar</h1>
    </Box>
  );
};

export default Sidebar;
