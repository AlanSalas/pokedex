import axios from "axios";

export const getPokemons = async (url) => {
  const { data } = await axios.get(url);
  const pokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const arrUrl = pokemon.url.split("/");
      const id = arrUrl[6];
      const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
      const { detailData } = await getDetailPokemon(id);
      return {
        id,
        name: pokemon.name,
        image: imgUrl,
        types: detailData.types,
      };
    })
  );
  const result = {
    pokemons,
    next: data.next,
    previous: data.previous,
  };

  return result;
};

export const getDetailPokemon = async (id) => {
  const { data: detailData } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const chainUrl = await getEvolutionChain(id);
  const { data: chainData } = await axios.get(chainUrl);

  return {
    detailData,
    chain: chainData.chain,
  };
};

export const search = async (pokemon) => {
  const { detailData } = await getDetailPokemon(pokemon);
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${detailData.id}.svg`;
  const pokemonFound = {
    id: detailData.id,
    name: detailData.name,
    image: imgUrl,
    types: detailData.types,
  };

  return {
    pokemons: [pokemonFound],
    next: null,
    previous: null,
  };
};

export const getEvolutionChain = async (id) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const { url } = data.evolution_chain;
  return url;
};
