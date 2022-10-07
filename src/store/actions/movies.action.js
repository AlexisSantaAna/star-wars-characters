import { movieTypes } from "../types";

const { SELECT_MOVIES } = movieTypes;

export const selectMovies = (saga) => ({
  type: SELECT_MOVIES,
  saga: saga,
});
