interface CocktailCardProps {
  id?: string;
  name?: string;
  image?: string;
  info?: string;
  glass?: string;
  instructions?: string;
  ingredients?: string[];
}
const CocktailInfo: React.FC<CocktailCardProps> = ({
  id,
  name,
  image,
  info,
  glass,
  instructions,
  ingredients,
}) => {
  return (
    <div
      className="appear flex max-w-4xl flex-col justify-center gap-4  p-4  md:grid md:grid-cols-2"
      key={id}
    >
      <section className="max-w-fit rounded shadow sm:h-96">
        <div className="relative max-w-fit rounded bg-gray-300 contrast-75  hover:brightness-110">
          <img
            src={image}
            alt={name}
            className="top rounded object-fill opacity-50 mix-blend-hard-light blur-sm backdrop-blur-lg sm:h-96"
          />
          <img
            src={image}
            alt={name}
            className="absolute top-0 rounded object-fill opacity-60 mix-blend-multiply sm:h-96 "
          />
        </div>
        <section className="flex h-6 justify-between">
          <div className="rounded bg-white  bg-opacity-50 px-2 py-1 text-xs text-rose-500">
            {info}
          </div>
          <div className="rounded bg-white  bg-opacity-50 px-2 py-1 text-xs text-rose-500">
            {glass}
          </div>
        </section>
      </section>
      <section className="mt-2 flex flex-col gap-3 sm:max-w-fit md:mt-0">
        <div className="flex items-center justify-end rounded bg-[#ff2571] bg-opacity-90 p-1 px-1 py-2 leading-none md:w-96">
          <h1 className="mr-2 text-4xl  text-white">{name}</h1>
        </div>
        <div className="rounded p-2 shadow">
          <h1 className="text-xl">Ingredients</h1>
          {ingredients &&
            ingredients.map((ing, index) => (
              <p key={ing + index} className="text-base text-gray-600">
                {ing}
              </p>
            ))}
        </div>
        <div className="mt-2 rounded p-2 shadow sm:w-96 sm:max-w-fit">
          <h1 className="text-xl">Instructions</h1>
          <article className="text-base text-gray-600">{instructions}</article>
        </div>
      </section>
    </div>
  );
};

export default CocktailInfo;
