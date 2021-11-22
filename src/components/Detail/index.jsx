import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";

const Detail = ({ title, value }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="button"
        sx={{ fontWeight: "bold", color: blueGrey[700] }}
      >
        {title}
      </Typography>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: grey[200], borderRadius: 2, px: 2, py: 1 }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{value}</Typography>
      </Stack>
    </Box>
  );
};

export default Detail;
