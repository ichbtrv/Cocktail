import { useRouter } from 'next/router';
import React from 'react';

import Logo from '../Logo';
import SearchBar from './SearchBar';

const SearchBarContainer = () => {
  const router = useRouter();
  return (
    <section className="mx-4 my-1 flex items-center justify-between rounded-lg bg-transparent bg-opacity-10 px-4 py-1 shadow backdrop-blur">
      <Logo
        variant={'cocktail.svg'}
        width="w-8"
        clickHandler={() => router.push('/')}
      />
      <SearchBar />
    </section>
  );
};

export default SearchBarContainer;
