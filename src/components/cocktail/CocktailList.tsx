import { useMemo, useState } from 'react';

import { useAppSelector } from '@/hooks/redux';
import type { Cocktail } from '@/store/cocktails/types';

import { selectCocktailsState } from '../../store/cocktails/selectors';
import Loading from '../Loading';
import CocktailCard from './CocktailCard';

const CocktailList = () => {
  const { cocktails, status, error } = useAppSelector(selectCocktailsState);
  const [cocktailState, setCocktailState] = useState<JSX.Element[] | null>(
    null
  );

  useMemo(
    () =>
      setCocktailState(
        cocktails.map((v: Cocktail) => (
          <CocktailCard
            key={v.idDrink}
            id={v.idDrink}
            name={v.strDrink}
            image={v.strDrinkThumb}
            info={v.strAlcoholic}
            glass={v.strGlass}
          />
        ))
      ),
    [status]
  );

  if (status === 'loading')
    return (
      <div className="flex h-[100vh] w-[100vw] items-center justify-center">
        <Loading active />
      </div>
    );

  if (status === 'error') {
    console.error(error);
    return <p>Oops, something went wrong..</p>;
  }

  return (
    <div className="appear flex flex-wrap justify-center">{cocktailState}</div>
  );
};

export default CocktailList;
