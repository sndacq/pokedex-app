'use client';

import { useAppContext } from '@/context/state';

import Card from '@/components/Card';
import Paginate from '@/components/Paginate';

const Home = () => {
  const { pokemonList } = useAppContext();

  return (
    <div className="main">
      <Paginate />
      <div
        className="content flex flex-wrap px-20 justify-evenly"
        data-testid="pokemon-list-container"
      >
        {pokemonList.map((pokemon) => <Card key={pokemon.id} data={pokemon} />)}
      </div>
    </div>
  );
};

export default Home;
