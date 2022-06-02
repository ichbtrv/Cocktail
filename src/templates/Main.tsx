import type { ReactNode } from 'react';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="max-w-2xl  text-gray-700 antialiased">
    {props.meta}
    {/* <Header /> */}
    <div className="mx-auto">
      <div className="py-5 text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
