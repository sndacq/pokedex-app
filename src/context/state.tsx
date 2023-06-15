'use client';

import {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

import { getPokemonList, getPokemonDetailsFromList, getPokemonDetailsById } from '@/api';

import { IPokemonDetails } from '@/utils/types';

interface IAppWrapperProps {
  children: React.ReactNode;
}

interface IStateContext {
  pokemonList: IPokemonDetails[];
  getPokemonDetails: (id: number) => Promise<IPokemonDetails>;
}

const AppContext = createContext<IStateContext>({
  pokemonList: [] as IPokemonDetails[],
  getPokemonDetails: async () => ({} as IPokemonDetails),
});

export const AppWrapper: FC<IAppWrapperProps> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([] as IPokemonDetails[]);

  useEffect(() => {
    getPokemonList()
      .then(async (res) => {
        const resultList = await getPokemonDetailsFromList(res.results);
        setPokemonList(resultList);
      }).catch((err) => console.error(err));
  }, []);

  const getPokemonDetails = async (id: number) => {
    const pokemon = pokemonList.find((p) => p.id === id);

    if (pokemon) return pokemon;

    const fetchedPokemon = await getPokemonDetailsById(id.toString())
      .then((res) => res)
      .catch((err) => {
        console.error(err);
        return null;
      });
    if (fetchedPokemon) {
      setPokemonList([...pokemonList, fetchedPokemon]);
      return fetchedPokemon;
    }

    return {} as IPokemonDetails;
  };

  const values = useMemo(() => ({ pokemonList, getPokemonDetails }), [pokemonList]);

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
