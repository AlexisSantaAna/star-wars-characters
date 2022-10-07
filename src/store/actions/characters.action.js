import { characterTypes } from "../types";

const { SELECT_CHARACTERS } = characterTypes;

export const selectCharacters = (species) => ({
  type: SELECT_CHARACTERS,
  species: species,
});
