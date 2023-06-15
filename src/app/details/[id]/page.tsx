'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { useAppContext } from '@/context/state';

import { IPokemonDetails } from '@/utils/types';

import Badge from '@/components/Badge';
import BackButton from '@/components/BackButton';

const Details = () => {
  const params = useParams();
  const { getPokemonDetails } = useAppContext();

  const [details, setDetails] = useState({} as IPokemonDetails);

  useEffect(() => {
    getPokemonDetails(parseInt(params.id, 10))
      .then((res) => setDetails(res))
      .catch((err) => console.error(err));
  }, []);

  const {
    name, types, sprites, stats,
  } = details;

  return (
    <div className="w-full h-full bg-white m-0 flex flex-col items-center justify-start">
      <div
        className="relative h-72 w-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${sprites?.other['official-artwork'].front_default})` }}
      />
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-gray-800 text-center mt-1 capitalize hover:text-black">{name}</h1>
        <div className="flex">
          {types?.map((typ) => <Badge key={typ.type.name} type={typ.type.name} />)}
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-900 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Attribute
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {stats?.map((stat) => (
              <tr className="bg-white font-medium text-gray-700 uppercase whitespace-nowrap">
                <th scope="row" className="px-6 py-4 ">
                  {stat.stat.name}
                </th>
                <td className="px-6 py-4">
                  {stat.base_stat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <BackButton />
    </div>
  );
};

export default Details;
