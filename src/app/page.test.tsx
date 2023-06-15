import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Home', () => {
  it('renders home page', () => {
    render(<Home />);

    expect(screen.getByTestId('pokemon-list-container')).toBeInTheDocument();
    expect(screen.getByTestId('previous-button')).toBeInTheDocument();
    expect(screen.getByTestId('next-button')).toBeInTheDocument();
    expect(screen.getByTestId('input-text')).toBeInTheDocument();
  });
});
