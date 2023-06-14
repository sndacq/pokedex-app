import axios from 'axios';

export const getAllPokemonList = async () => axios.get('https://pokeapi.co/api/v2/pokemon/')
  .then((response) => response.data)
  .catch((err) => Promise.reject(err));

export const getPokemonDetails = async (id: string) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((response) => response.data)
  .catch((err) => Promise.reject(err));