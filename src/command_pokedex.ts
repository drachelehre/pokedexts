import type { State } from "./state.js";

export async function commandPokedex (state: State) {

    if (Object.entries(state.caughtPokemon).length === 0) {
        throw new Error("You've caught no pokemon!")
    }

    console.log("Your Pokedex:")
    for (const [name, pokemon] of Object.entries(state.caughtPokemon)) {
        console.log(`\t - ${pokemon.name}`)
    }
}