import { useRouter } from 'next/router';

interface CocktailCardProps {
  keyName?: string;
  id?: string;
  name?: string;
  image?: string;
  info?: string;
  glass?: string;
}
const CocktailCard: React.FC<CocktailCardProps> = ({
  id,
  keyName,
  name,
  image,
  info,
  glass,
}) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col justify-center p-4"
      key={id}
      onClick={() => router.push(`cocktail/${id}`)}
    >
      <div className="relative shadow" key={keyName}>
        <div className="absolute top-1 right-1 z-40 rounded bg-white  bg-opacity-50 px-2 py-1 text-xs text-rose-500">
          {info}
        </div>

        <div className="absolute top-8 right-1 z-40 rounded bg-white  bg-opacity-50 px-2 py-1 text-xs text-rose-500">
          {glass}
        </div>

        <div className="absolute right-0 bottom-0 z-30   rounded  p-2  text-gray-700">
          <div className="z-30  flex items-center justify-end rounded bg-[#ff2571] bg-opacity-60 p-1 leading-none">
            <h1 className="z-30  text-4xl text-white">{name}</h1>
          </div>
        </div>

        <div className="relative rounded bg-gray-300  contrast-75 hover:outline hover:outline-rose-500">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-72 rounded object-fill opacity-50 mix-blend-hard-light blur-sm backdrop-blur-lg"
          />
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="absolute top-0 h-72 rounded object-fill opacity-60 mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
