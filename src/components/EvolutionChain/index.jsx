import React from "react";
import { useSelector } from "react-redux";
import useChain from "../../hooks/useChain";
import { Stack, Box, Typography, Chip, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const EvolutionChain = () => {
  const chain = useSelector((state) => state.pokemon.chain);
  const evolutionChain = useChain(chain);
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
    >
      {evolutionChain &&
        evolutionChain.map((item) => (
          <Stack
            key={item.name}
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            sx={{ mb: { xs: 2, sm: 0 } }}
          >
            <Stack>
              <Box
                component="img"
                src={item.imgUrl}
                sx={{ height: "75px", width: "75px" }}
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                {item.name}
              </Typography>
              <Chip
                label={`Lvl ${item.minLevel}`}
                sx={{
                  mb: { xs: 2, sm: 0 },
                  backgroundColor: grey[200],
                  fontWeight: "bold",
                }}
              />
            </Stack>
            {!item.lastEvolve && (
              <Box sx={{ mx: 1 }}>
                {!mobile ? <ArrowForwardIosIcon /> : <KeyboardArrowDownIcon />}
              </Box>
            )}
          </Stack>
        ))}
    </Stack>
  );
};

export default EvolutionChain;
