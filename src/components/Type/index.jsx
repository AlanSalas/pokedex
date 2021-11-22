import React from "react";
import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { colors } from "../../utils";
import { icons } from "./types";

const Type = ({ type, position, width, height }) => {
  return (
    <Tooltip
      title={
        <Typography
          sx={{
            fontSize: ".8rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {type.type.name}
        </Typography>
      }
      placement={position}
      arrow
      sx={{ fontSize: "3rem" }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          height: height || "30px",
          width: width || "30px",
          backgroundColor: colors[type.type.name],
          borderRadius: "100%",
          boxShadow: `0 2px 10px ${colors[type.type.name]}`,
        }}
      >
        <Box
          sx={{ height: "60%", width: "60%" }}
          component="img"
          src={icons[type.type.name]}
        />
      </Stack>
    </Tooltip>
  );
};

export default Type;
