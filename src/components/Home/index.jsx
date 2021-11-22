import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/pokemons";
import { Box } from "@mui/material";
import Header from "../Header";
import List from "../List";
import InfoDialog from "../InfoDialog";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons("https://pokeapi.co/api/v2/pokemon?limit=9"));
  }, [dispatch]);

  return (
    // Container
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        p: 2,
      }}
    >
      <Header />
      <List />
      <InfoDialog />
    </Box>
  );
};

export default Home;
