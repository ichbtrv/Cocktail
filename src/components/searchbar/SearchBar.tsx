import { useCallback, useState } from 'react';

import Icon from '../icons';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <section className="relative mx-auto mt-1 flex max-w-lg">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon iconKey="search" />
      </span>
      <form
        className="mr-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="w-64 rounded-md border py-2 pl-10 pr-4 text-base focus:border-[#ff5d96] focus:outline-none md:w-96"
          type="text"
          name="cocktail"
          placeholder="Find Cocktails"
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </section>
  );
};

export default SearchBar;
