import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchCocktailsByName = createAsyncThunk(
  'cocktails/searchCocktailsByName',
  async (searchText: string) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    ).then((res) => res.json());
    if (Array.isArray(response.drinks)) {
      return response.drinks;
    }
  }
);
