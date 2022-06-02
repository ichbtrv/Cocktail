import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import { useState, useTransition } from 'react';
import { useDispatch } from 'react-redux';

import { searchCocktailsByName } from '@/store/cocktails/thunks';

import Icon from '../icons';

const SearchBar = () => {
  const [, startTransition] = useTransition();
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchText(e.target.value);
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      dispatch(searchCocktailsByName(searchText));
    });
    if (router.query.id !== undefined) {
      router.push('/');
    }
  };

  return (
    <section className="relative mx-auto mt-1 flex max-w-lg">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon iconKey="search" />
      </span>
      <form className="mr-2" onSubmit={handleSubmit}>
        <input
          className="w-64 rounded-md border py-2 pl-10 pr-4 text-base focus:border-[#ff5d96] focus:outline-none md:w-96"
          type="text"
          name="cocktail"
          placeholder="Find Cocktails"
          value={searchText}
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default SearchBar;
