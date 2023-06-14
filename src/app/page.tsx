'use client';

import { useEffect, useState } from 'react';

import { getPokemonDetailsFromList, getPokemonList } from '@/api';
import { IPokemonDetails } from '@/utils/types';

import Card from '@/components/Card';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([] as IPokemonDetails[]);

  useEffect(() => {
    getPokemonList()
      .then(async (res) => {
        const resultList = await getPokemonDetailsFromList(res.results);
        setPokemonList(resultList);
      }).catch((err) => console.error(err));
  }, []);

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
