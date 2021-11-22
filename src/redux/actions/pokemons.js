import { getPokemons, search } from "../../api/pokemons";
import {
  removeError,
  setError,
  uiFinishLoading,
  uiStartLoading,
  uiStartLoadingSearch,
  uiFinishLoadingSearch,
  searchActive,
} from "./ui";

export const getAllPokemons = (url) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const data = await getPokemons(url);
    dispatch({ type: "GET_ALL", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const searchPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch(uiStartLoadingSearch());
    const data = await search(pokemon);
    dispatch({ type: "SEARCH", payload: data });
    dispatch(uiFinishLoadingSearch());
    dispatch(searchActive());
    dispatch(removeError());
  } catch (error) {
    if (error.message === "Request failed with status code 404") {
      dispatch(
        setError(`${pokemon} not found, are you sure that is a Pokemon? 🤨`)
      );
    } else {
      dispatch(setError(error.message));
    }
    dispatch(uiFinishLoadingSearch());
  }
};

export const nextPage = (url, pokemons) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const data = await getPokemons(url);
    const newState = {
      next: data.next,
      previous: data.previous,
      pokemons: [...pokemons, ...data.pokemons],
    };
    dispatch({ type: "NEXT_PAGE", payload: newState });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};
