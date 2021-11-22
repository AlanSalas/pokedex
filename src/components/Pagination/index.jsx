import React from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/pokemons";
import { searchInactive } from "../../redux/actions/ui";
import { Stack } from "@mui/material";
import Button from "../Button";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Pagination = ({ next, prev }) => {
  const dispatch = useDispatch();
  const disabledPrev = prev ? false : true;
  const disabledNext = next ? false : true;

  const handleLoadPoke = (url) => {
    dispatch(getAllPokemons(url));
    dispatch(searchInactive());
  };

  return (
    <Stack direction="row" sx={{ mt: 7 }}>
      <Button
        title={<ArrowBack />}
        border={5}
        sx={{ mr: 2 }}
        disabled={disabledPrev}
        onClick={() => handleLoadPoke(prev)}
      />
      <Button
        title={<ArrowForward />}
        border={5}
        disabled={disabledNext}
        onClick={() => handleLoadPoke(next)}
      />
    </Stack>
  );
};

export default Pagination;
