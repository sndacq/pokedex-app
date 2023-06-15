'use client';

import {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

import { getPokemonList, getPokemonDetailsFromList } from '@/api';

import { IPokemonDetails } from '@/utils/types';

interface IAppWrapperProps {
  children: React.ReactNode;
}

interface IStateContext {
  pokemonList: IPokemonDetails[]
}

const AppContext = createContext<IStateContext>({
  pokemonList: [] as IPokemonDetails[],
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

  const values = useMemo(() => ({ pokemonList }), [pokemonList]);

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
