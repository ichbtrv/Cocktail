import React from 'react';

interface LogoVariant {
  variant?: string;
  width?: string;
  className?: string;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Logo: React.FC<LogoVariant> = ({
  variant = 'cocktail.jpg',
  width = 'w-36',
  clickHandler,
  className,
}) => {
  return (
    <section
      onClick={clickHandler}
      className={`${className} mt-1 mr-2 cursor-pointer rounded-xl p-2 mix-blend-screen hover:bg-gray-400 hover:bg-opacity-20`}
    >
      <img src={`/logos/${variant}`} alt="cocktail" className={`${width}`} />
    </section>
  );
};

export default Logo;
