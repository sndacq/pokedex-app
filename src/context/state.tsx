'use client';

import {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

import {
  getPokemonList,
  getPokemonDetailsApi,
  getPokemonDetailsFromList,
  getPokemonDetailsById,
} from '@/api';

import { IPokemonDetails } from '@/utils/types';

interface IAppWrapperProps {
  children: React.ReactNode;
}

interface IStateContext {
  pokemonList: IPokemonDetails[];
  getPokemonDetails: (id: number) => Promise<IPokemonDetails>;
  pageLength: number;
  setPageLength: React.Dispatch<number>;
  prevPage: string;
  nextPage: string;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const AppContext = createContext<IStateContext>({
  pokemonList: [] as IPokemonDetails[],
  getPokemonDetails: async () => ({} as IPokemonDetails),
  pageLength: 20,
  setPageLength: () => {},
  onNextPage: () => {},
  onPrevPage: () => {},
  prevPage: '',
  nextPage: '',
});

export const AppWrapper: FC<IAppWrapperProps> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([] as IPokemonDetails[]);
  const [pageLength, setPageLength] = useState(20);

  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    getPokemonList(pageLength)
      .then(async (res) => {
        const resultList = await getPokemonDetailsFromList(res.results);
        setPrevPage(res?.previous || '');
        setNextPage(res?.next || '');
        setPokemonList(resultList);
      }).catch((err) => console.error(err));
  }, [pageLength]);

  const onPrevPage = () => {
    if (!prevPage) return;
    getPokemonDetailsApi(prevPage)
      .then(async (res) => {
        const resultList = await getPokemonDetailsFromList(res.results);
        setPrevPage(res?.previous || '');
        setNextPage(res?.next || '');
        setPokemonList(resultList);
      }).catch((err) => console.error(err));
  };

  const onNextPage = () => {
    if (!nextPage) return;
    getPokemonDetailsApi(nextPage)
      .then(async (res) => {
        const resultList = await getPokemonDetailsFromList(res.results);
        setPrevPage(res?.previous || '');
        setNextPage(res?.next || '');
        setPokemonList(resultList);
      }).catch((err) => console.error(err));
  };

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

  const values = useMemo(() => ({
    pokemonList,
    getPokemonDetails,
    pageLength,
    setPageLength,
    nextPage,
    onNextPage,
    prevPage,
    onPrevPage,
  }), [pokemonList]);

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
