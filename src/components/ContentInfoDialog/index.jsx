import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Type from "../Type";
import Detail from "../Detail";
import Stats from "../Stats";
import Fade from "../Fade";
import EvolutionChain from "../EvolutionChain";

const ContentInfoDialog = ({ image, number, detail, types, dataStats }) => {
  return (
    <Fade>
      {/* Image */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "absolute",
          top: { xs: "-20%", sm: "-22%" },
          left: 0,
          right: 0,
          m: "auto",
          height: "150px",
          width: "150px",
        }}
      >
        <Box
          component="img"
          src={image}
          sx={{ height: "100%", width: "100%" }}
        />
      </Box>
      {/* Image Mobile */}
      <Stack
        alignItems="center"
        sx={{ mb: 2, display: { xs: "block", sm: "none" } }}
      >
        <Box
          component="img"
          src={image}
          sx={{ height: "120px", width: "120px" }}
        />
      </Stack>
      {/* Info */}
      <Typography
        variant="body1"
        align="center"
        sx={{ fontWeight: "bold", color: blueGrey[700] }}
      >
        #{number}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ textTransform: "uppercase", mb: 2, fontWeight: "bold" }}
      >
        {detail && detail.name}
      </Typography>
      {/* Types */}
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
        {types &&
          types.map((type) => (
            <Type key={type.type.name} type={type} width="50px" height="50px" />
          ))}
      </Stack>
      {/* Details */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-evenly"
        sx={{ mb: 2 }}
      >
        <Detail title="Height" value={detail && `${detail.height / 10}m`} />
        <Detail title="Weight" value={detail && `${detail.weight / 10}kg`} />
        <Detail
          title="Base exp"
          value={detail && `${detail.base_experience}`}
        />
      </Stack>
      {/* Stats */}
      <Typography
        variant="button"
        sx={{ fontWeight: "bold", color: blueGrey[700] }}
      >
        STATS
      </Typography>
      <Stats dataStats={dataStats} />
      {/* EvolutionChain */}
      <Typography
        variant="button"
        sx={{ fontWeight: "bold", color: blueGrey[700] }}
      >
        EVOLUTION
      </Typography>
      <EvolutionChain />
    </Fade>
  );
};

export default ContentInfoDialog;
