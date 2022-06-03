import { useRouter } from 'next/router';
import React from 'react';

import CocktailInfo from '@/components/cocktail/CocktailInfo';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getIngredients } from '@/utils';

import { useGetCocktailByIdQuery } from '../../store/cocktails/api';

const SingleCocktail = () => {
  const router = useRouter();
  const { id } = router.query;
  // @ts-ignore

  const { data, error } = useGetCocktailByIdQuery(id);
  let ingredients;

  if (data) ingredients = getIngredients(data);

  if (error) {
    console.error(error);
    return <p>Oops, something went wrong..</p>;
  }

  return (
    <Main meta={<Meta title="Cocktail" description="A Cocktail Library" />}>
      {data && (
        <CocktailInfo
          id={data.idDrink}
          name={data.strDrink}
          image={data.strDrinkThumb}
          info={data.strAlcoholic}
          glass={data.strGlass}
          instructions={data.strInstructions}
          ingredients={ingredients}
        />
      )}
    </Main>
  );
};

export default SingleCocktail;
