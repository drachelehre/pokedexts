import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const name = args[0];
  const pokemon = await state.pokeAPI.fetchPokemon(name);

if (!(pokemon.name in state.caughtPokemon)) {
    throw new Error("pokemon must exist in pokedex.");
}

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for(let i = 0; i < pokemon.stats.length; i++) {
    console.log(`\t - ${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}`)
  }
  console.log("Type:");
  for(let i = 0; i < pokemon.types.length; i++) {
    console.log(`\t - ${pokemon.types[i].type.name}`)
  }
}