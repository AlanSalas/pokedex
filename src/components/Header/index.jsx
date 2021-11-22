import React from "react";
import { Box } from "@mui/material";
import Searchbox from "../Searchbox";
import pokeball from "../../assets/pokeball.png";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 2, sm: 0 },
        }}
      >
        {/* Title */}
        <Box
          sx={{
            typography: "h1",
            fontSize: "2rem",
            fontFamily: "Bungee Shade, cursive",
            marginRight: 2,
            color: "black",
          }}
        >
          Pokedex
        </Box>
        {/* Pokeball */}
        <Box
          component="img"
          sx={{
            width: "5rem",
            height: "5rem",
          }}
          src={pokeball}
          alt="Logo"
        />
      </Box>
      <Searchbox />
    </Box>
  );
};

export default Header;
