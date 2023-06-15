'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { getPokemonDetailsById } from '@/api';
import { IPokemonDetails } from '@/utils/types';

const Details = () => {
  const params = useParams();

  const [details, setDetails] = useState({} as IPokemonDetails)

  useEffect(() => {
    getPokemonDetailsById(params.id)
    .then(res => setDetails(res))
    .catch(err => console.error(err))
  }, []);

  return (
    <div>
      <h1>{details.name}</h1>
    </div>
  );
};

export default Details;
