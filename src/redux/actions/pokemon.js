import { getDetailPokemon } from "../../api/pokemons";
import {
  removeError,
  setError,
  uiFinishLoadingDetail,
  uiStartLoadingDetail,
} from "./ui";

const statsName = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SpA",
  "special-defense": "SpD",
  speed: "SPD",
};

const statsFullName = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Special Attack",
  "special-defense": "Special Defense",
  speed: "Speed",
};

export const getDetailPoke = (id, number, types, image) => async (dispatch) => {
  try {
    dispatch(uiStartLoadingDetail());
    const res = await getDetailPokemon(id);
    const dataStats = res.detailData.stats.map((stat) => {
      return {
        name: statsName[stat.stat.name],
        fullName: statsFullName[stat.stat.name],
        value: stat.base_stat,
      };
    });

    const data = {
      number,
      dataStats,
      detail: res.detailData,
      chain: res.chain,
      types,
      image,
    };

    dispatch({ type: "GET_DETAIL", payload: data });
    setTimeout(() => {
      dispatch(uiFinishLoadingDetail());
    }, 800);
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoadingDetail());
  }
};
