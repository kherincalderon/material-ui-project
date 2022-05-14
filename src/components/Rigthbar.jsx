import React from "react";
import { Box } from "@mui/material";

const Rigthbar = () => {
  return (
    <Box
      bgcolor="red"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <h1>Rigthbar</h1>
    </Box>
  );
};

export default Rigthbar;
