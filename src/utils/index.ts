import type { Cocktail } from '@/store/cocktails/types';

export const getIngredients = (c: Cocktail): string[] => {
  const MAX_INGREDIENTS = 15;
  const ingredients = [];

  for (let i = 0; i < MAX_INGREDIENTS; i++) {
    const key = `strIngredient${i}` as keyof Cocktail;
    const ingredient = c[key];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return ingredients;
};
