/* eslint-disable no-return-assign */
import React from 'react';

import { useAppSelector } from '@/hooks/redux';

import { selectCocktailsState } from '../store/cocktails/selectors';
import CocktailCard from './CocktailCard';

const CocktailList = () => {
  const { cocktails, status, error } = useAppSelector(selectCocktailsState);
  const cocktailsState = cocktails.map((v) => (
    <CocktailCard
      key={v.idDrink}
      id={v.idDrink}
      name={v.strDrink}
      image={v.strDrinkThumb}
      info={v.strAlcoholic}
      glass={v.strGlass}
    />
  ));

  if (status === 'loading') return <p>Loading...</p>;

  if (status === 'error') {
    console.error(error);
    return <p>Oops, something went wrong..</p>;
  }

  return (
    <div className="">
      <div className="flex flex-wrap justify-center">{cocktailsState}</div>
    </div>
  );
};

export default CocktailList;
