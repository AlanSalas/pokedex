import { combineReducers } from "redux";
import pokemons from "./pokemons";
import pokemon from "./pokemon";
import ui from "./ui";

export default combineReducers({ pokemon, pokemons, ui });
