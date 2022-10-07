import { characters } from "../../constants/data";
import { characterTypes } from "../types";
const { SELECT_CHARACTERS } = characterTypes;

const initialState = {
  characters: characters,
  filtered: [],
  selected: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CHARACTERS:
      const filteredCharacters = characters.filter(
        (character) => character.species == action.species
      );
      return {
        ...state,
        filtered: filteredCharacters,
      };
    default:
      return state;
  }
};

export default charactersReducer;
