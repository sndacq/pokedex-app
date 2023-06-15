import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders NavBar page', () => {
    render(<NavBar />);

    expect(screen.getByTestId('navbar-image')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-home-link')).toBeInTheDocument();
  });
});
