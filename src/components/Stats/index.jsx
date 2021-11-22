import React from "react";
import { Stack, Typography, Tooltip } from "@mui/material";
import { grey } from "@mui/material/colors";
import { colorStats } from "../../utils";

const Stats = ({ dataStats }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ flexWrap: "wrap", width: "100%", mb: 2 }}
    >
      {dataStats &&
        dataStats.map((stat) => (
          <Tooltip
            key={stat.name}
            title={
              <Typography
                sx={{
                  fontSize: ".8rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {stat.fullName}
              </Typography>
            }
            placement="top"
            arrow
          >
            <Stack
              alignItems="center"
              sx={{
                backgroundColor: grey[200],
                borderRadius: 100,
                p: 1,
              }}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  borderRadius: "100%",
                  backgroundColor: colorStats[stat.name],
                  height: "2.2rem",
                  mb: 0.5,
                  p: 0.5,
                  width: "2.2rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: ".7rem",
                    fontWeight: "bold",
                    color: grey[50],
                  }}
                >
                  {stat.name}
                </Typography>
              </Stack>
              <Typography sx={{ fontWeight: "bold" }}>{stat.value}</Typography>
            </Stack>
          </Tooltip>
        ))}
    </Stack>
  );
};

export default Stats;
