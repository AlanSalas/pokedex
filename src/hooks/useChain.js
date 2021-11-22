const useChain = (chain, id) => {
  const evolutionChain = [];
  let dataChain = chain || null;

  if (dataChain) {
    do {
      const id = dataChain.species.url.split("/");
      const name = dataChain.species?.name;
      const evolutionDetails = dataChain.evolution_details[0];
      evolutionChain.push({
        name,
        minLevel: evolutionDetails?.min_level || 1,
        triggerName: evolutionDetails?.trigger.name,
        imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id[6]}.svg`,
        lastEvolve: !dataChain.evolves_to[0] ? true : false,
      });
      dataChain = dataChain.evolves_to[0];
    } while (!!dataChain && dataChain.evolves_to);
  }

  return evolutionChain;
};

export default useChain;
