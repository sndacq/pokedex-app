import { FC } from 'react';

interface ICardProps {
  data: any;
}

const Card: FC<ICardProps> = ({ data }) => {
  const { thumbnail } = data;

  return (
    <div className="w-80 bg-white shadow rounded my-2">
      <div
        className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnail?.url})` }}
      />
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-400 font-light text-xs text-center">{'vin'}</p>
        <h1 className="text-gray-800 text-center mt-1">{'${year} ${make} ${model}`'}</h1>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
          type="button"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
