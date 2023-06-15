import { useState } from 'react';
import { useAppContext } from '@/context/state';

const Paginate = () => {
  const {
    pageLength, setPageLength, onNextPage, onPrevPage, nextPage, prevPage,
  } = useAppContext();

  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (hasError) setHasError(false);
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const intPageLength = parseInt(inputValue, 10);

      if ((intPageLength && intPageLength >= 0) || inputValue === '') {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        inputValue === '' ? setPageLength(10) : setPageLength(intPageLength);
      } else setHasError(true);
    }
  };

  return (
    <nav className="flex justify-center mb-4">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            type="button"
            className="h-10 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={onPrevPage}
            disabled={prevPage === ''}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>

          </button>
        </li>
        <li>
          <input
            type="text"
            className={`text-sm w-[130px] h-10 border ${hasError ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700' : ''}`}
            placeholder={`Showing ${pageLength} results`}
            onChange={handleSearchInput}
            onKeyDown={handleKeyDown}
            value={inputValue}
          />
          {hasError && <p className="mt-2 text-sm text-red-600">Invalid input</p>}
        </li>
        <li>
          <button
            type="button"
            className="h-10 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={onNextPage}
            disabled={nextPage === ''}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
