import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPokemon } from "../../redux/actions/pokemons";
import { Box, InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../Button";

const Searchbox = () => {
  const [input, setInput] = useState(null);
  const dispatch = useDispatch();
  const loadingSearch = useSelector((state) => state.ui.loadingSearch);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSearch = () => {
    dispatch(searchPokemon((input && input.toLowerCase()) || "empty"));
  };

  return (
    <Stack direction="row" justifyContent="center">
      <Box
        sx={{
          height: "4rem",
          display: "flex",
          alignItems: "center",
          border: 5,
          borderColor: "common.black",
          borderRadius: 1,
          mr: 2,
          p: 1,
        }}
      >
        <SearchIcon />
        <InputBase
          sx={{
            marginLeft: 1,
            width: "100%",
          }}
          placeholder="Search a Pokemon"
          onChange={handleInputChange}
        />
      </Box>
      <Button
        title="Go!"
        border={5}
        onClick={handleSearch}
        loading={loadingSearch}
      />
    </Stack>
  );
};

export default Searchbox;
