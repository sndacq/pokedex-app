import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AppRouterInstance, AppRouterContext } from 'next/dist/shared/lib/app-router-context';
import { IPokemonDetails, PokemonType } from '@/utils/types';
import Card from './Card';

const mockRouter = (push: () => void): AppRouterInstance => ({
  back: () => {},
  forward: () => {},
  refresh: () => {},
  push,
  replace: () => {},
  prefetch: () => {},
});

describe('Card', () => {
  it('renders Card component', () => {
    const testData = {
      name: 'test pokemon',
      types: [
        {
          slot: 1,
          type: { name: PokemonType.bug, url: '' },
        },
        {
          slot: 1,
          type: { name: PokemonType.ice, url: '' },
        },
      ],
    } as IPokemonDetails;
    const mockPush = jest.fn();

    render(
      <AppRouterContext.Provider value={mockRouter(mockPush)}>
        <Card data={testData} />
      </AppRouterContext.Provider>,
    );

    expect(screen.getByText('test pokemon')).toBeInTheDocument();
    expect(screen.getByText('bug')).toBeInTheDocument();
    expect(screen.getByText('ice')).toBeInTheDocument();

    screen.getByTestId('card-detail-button').click();
    expect(mockPush).toHaveBeenCalled();
  });
});
