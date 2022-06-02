import type { ReactNode } from 'react';

import Landing from '@/components/Landing';
import SearchBarContainer from '@/components/searchbar/SearchBarContainer';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="text-gray-700 antialiased">
    {props.meta}
    <div className="mx-auto p-4">
      <Landing />

      <SearchBarContainer />
      <div className="py-5 text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
