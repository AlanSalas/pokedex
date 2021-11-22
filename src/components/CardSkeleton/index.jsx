import React from "react";
import { Box, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Box
      sx={{
        height: "10rem",
        backgroundColor: "#eee",
        borderRadius: 1,
        display: "flex",
        p: 3,
      }}
    >
      <Skeleton height="100%" width="8rem" />
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <Box sx={{ position: "absolute", top: "0", right: "0" }}>
          <Skeleton sx={{ borderRadius: 3 }} height="3rem" width="3rem" />
        </Box>
        <Box sx={{ position: "absolute", bottom: "0", right: "0" }}>
          <Skeleton height="3rem" width="7rem" />
        </Box>
      </Box>
    </Box>
  );
};

export default CardSkeleton;
