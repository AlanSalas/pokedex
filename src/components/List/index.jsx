// React
import React from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/pokemons";
import { searchInactive } from "../../redux/actions/ui";
// Components
import Card from "../Card";
import Button from "../Button";
import CardSkeleton from "../CardSkeleton";
import { Container, Grid, Stack } from "@mui/material";
import Error from "../Error";
import Pagination from "../Pagination";

const List = () => {
  const dispatch = useDispatch();
  const listSkeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const loading = useSelector((state) => state.ui.loading);
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const nextPage = useSelector((state) => state.pokemons.next);
  const prevPage = useSelector((state) => state.pokemons.previous);
  const error = useSelector((state) => state.ui.error);
  const searchActive = useSelector((state) => state.ui.searchActive);

  const handleGoBack = () => {
    dispatch(getAllPokemons("https://pokeapi.co/api/v2/pokemon?limit=9"));
    dispatch(searchInactive());
  };

  return (
    <Container sx={{ p: { xs: 0 } }}>
      <Grid container spacing={2} justifyContent="center">
        {error && <Error message={error} />}
        {!error &&
          !loading &&
          pokemons &&
          pokemons.map((pokemon) => (
            <Grid key={pokemon.id} item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Card {...pokemon} />
            </Grid>
          ))}
        {loading && (
          <>
            {listSkeletons.map((item) => (
              <Grid key={item} item xs={12} sm={6} md={6} lg={4} xl={4}>
                <CardSkeleton />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      {!error && (
        <Stack alignItems="center">
          {searchActive ? (
            <Button
              title="Back to Home"
              marginTop={3}
              border={5}
              onClick={handleGoBack}
            />
          ) : (
            <Pagination next={nextPage} prev={prevPage} />
          )}
        </Stack>
      )}
    </Container>
  );
};

export default List;
