import { FC } from 'react';
import { PokemonType } from '@/utils/types';

interface IBadgeProps {
  type: PokemonType;
}

const Badge: FC<IBadgeProps> = ({ type }) => {
  const getColor = () => {
    switch (type) {
      case PokemonType.fire:
        return 'bg-orange-400 text-orange-800';
      case PokemonType.water:
        return 'bg-blue-400 text-blue-800';
      case PokemonType.grass:
        return 'bg-green-100 text-green-800';
      case PokemonType.electric:
        return 'bg-yellow-100 text-yellow-800';
      case PokemonType.ice:
        return 'bg-blue-100 text-blue-800';
      case PokemonType.fighting:
        return 'bg-red-100 text-red-800';
      case PokemonType.poison:
        return 'bg-purple-100 text-purple-800';
      case PokemonType.ground:
        return 'bg-yellow-700 text-white';
      case PokemonType.flying:
        return 'bg-purple-100 text-black';
      case PokemonType.psychic:
        return 'bg-pink-500 text-pink-800';
      case PokemonType.bug:
        return 'bg-green-300 text-white';
      case PokemonType.rock:
        return 'bg-yellow-800 text-white';
      case PokemonType.ghost:
        return 'bg-indigo-600 text-white';
      case PokemonType.dark:
        return 'bg-black text-white';
      case PokemonType.dragon:
        return 'bg-indigo-400 text-white';
      case PokemonType.steel:
        return 'bg-gray-600 text-white';
      case PokemonType.fairy:
        return 'bg-pink-200 text-pink-800';
      case PokemonType.normal:
      default:
        return 'bg-white-100 text-black';
    }
  };

  return (
    <div>
      <span className={`${getColor()} text-xs font-medium mr-2 px-2.5 py-0.5 rounded uppercase`}>{type}</span>
    </div>
  );
};

export default Badge;
