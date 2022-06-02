import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import { cocktailsAdapter } from './cocktailsSlice';

export const {
  selectAll: selectAllCocktails,
  selectIds: selectCocktailsIds,
  selectById: selectCocktailById,
} = cocktailsAdapter.getSelectors<RootState>((state) => state.cocktails);

export const selectCocktails = (state: RootState) => state.cocktails;

export const selectCocktailsState = createSelector(
  selectCocktails,
  selectAllCocktails,
  (state, cocktails) => ({
    cocktails,
    status: state.status,
    error: state.error,
  })
);
