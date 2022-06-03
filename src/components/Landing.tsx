import { useRouter } from 'next/router';
import React from 'react';

import { useAppSelector } from '@/hooks/redux';
import { selectCocktailsState } from '@/store/cocktails/selectors';

import Logo from './Logo';

const Landing = () => {
  const { cocktails } = useAppSelector(selectCocktailsState);
  const router = useRouter();

  if (cocktails.length !== 0 || router.query.id !== undefined) return <></>;

  return (
    <section className="appear relative my-2 mx-4 overflow-hidden rounded-xl shadow md:h-[50vh] ">
      <div className="absolute  top-0 left-1 z-10 ml-2 p-4 text-[#ff5d96] sm:top-1 sm:p-0 md:backdrop-blur-xl">
        <h1 className=" text-4xl leading-none sm:text-6xl">
          Find a Cocktail
          <br /> Recipe.
        </h1>
        <p className="mt-2 break-words text-sm text-slate-200">
          Whether it be for a party, or you just want to mix it up,
        </p>
        <p className="text-sm text-white">
          The perfect drink is <span className="text-[#ff5d96]">waiting.</span>
        </p>
      </div>
      <div className="invisible absolute bottom-1 right-2 z-10 lg:visible">
        <Logo variant={'cocktail.svg'} className="ml-10" width="w-16" />
        <h1
          className="
         text-2xl text-[#ff5d96]"
        >
          Cocktail<span className="text-gray-400">Search</span>
        </h1>
      </div>

      <img
        src="/cocktail.jpg"
        alt="party"
        loading="lazy"
        className="w-[97vw] rounded-xl object-cover brightness-75 contrast-75 saturate-0 sm:blur-[2.5px]"
      />
    </section>
  );
};

export default Landing;
