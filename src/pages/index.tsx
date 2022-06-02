import { Suspense } from 'react';

import CocktailList from '@/components/cocktail/CocktailList';
import Loading from '@/components/Loading';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Cocktail" description="A Cocktail Library" />}>
      <Suspense
        fallback={
          <div className="flex h-[100vh] w-[100vw] items-center justify-center">
            <Loading active />
          </div>
        }
      >
        <CocktailList />
      </Suspense>
    </Main>
  );
};

export default Index;
