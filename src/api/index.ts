import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

import { IPokeApi, IPokemonDetails } from '@/utils/types';

const axios = setupCache(Axios);

export const getPokemonList = async () => axios.get('https://pokeapi.co/api/v2/pokemon/')
  .then((response) => response.data)
  .catch((err) => Promise.reject(err));

export const getPokemonDetails = async (url: string) => axios.get(url)
  .then((response) => response.data)
  .catch((err) => Promise.reject(err));

export const getPokemonDetailsById = async (id: string) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((response) => response.data)
  .catch((err) => Promise.reject(err));

export const getPokemonDetailsFromList = async (results: IPokeApi[]) => {
  const detailsUrlList = results.map((data) => getPokemonDetails(data.url));

  return Promise.all(detailsUrlList)
    .then(Axios.spread((...res) => res as IPokemonDetails[]));
};
