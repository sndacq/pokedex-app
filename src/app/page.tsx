'use client';

import { useAppContext } from '@/context/state';

import Card from '@/components/Card';

const Home = () => {
  const { pokemonList } = useAppContext();

  return (
    <div className="main">
      <div className="content flex flex-wrap px-20 justify-evenly">
        {pokemonList.map((pokemon) => <Card key={pokemon.id} data={pokemon} />)}
      </div>
      {/* <Paginate
        itemsPerPage={itemsPerPage}
        totalItems={filteredList.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      /> */}
    </div>
  );
};

export default Home;
