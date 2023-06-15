import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { IPokemonDetails } from '@/utils/types';
import Badge from './Badge';

interface ICardProps {
  data: IPokemonDetails;
}

const Card: FC<ICardProps> = ({ data }) => {
  const {
    name, types, sprites, id,
  } = data;

  const router = useRouter();

  return (
    <div
      className="w-80 bg-white shadow rounded my-2"
      onClick={() => router.push(`/details/${id}`)}
      role="button"
    >
      <div
        className="h-72 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${sprites?.other['official-artwork'].front_default})` }}
      />
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-gray-800 text-center mt-1 capitalize hover:text-black">{name}</h1>
        <div className="flex">
          {types.map((typ) => <Badge type={typ.type.name} />)}
        </div>
      </div>
    </div>
  );
};

export default Card;
