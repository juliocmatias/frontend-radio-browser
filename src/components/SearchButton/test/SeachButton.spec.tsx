import { render, screen } from '@testing-library/react';

import { SearchButton } from '@/components/SearchButton';

describe('SearchButton', () => {
  it('should render the button with text', () => {
    render(<SearchButton>Search Test</SearchButton>);

    const searchButtonElement = screen.getByRole('button', {
      name: 'Search Test'
    });

    expect(searchButtonElement).toBeInTheDocument();
  });

  it('should render the button without text', () => {
    render(<SearchButton />);

    const searchButtonElement = screen.getByRole('button');
    expect(searchButtonElement).toBeInTheDocument();

    expect(screen.queryByText('Search Test')).not.toBeInTheDocument();
  });

  it('should apply floating styles when the floating prop is true', () => {
    render(<SearchButton floating>Search</SearchButton>);

    const searchButtonElement = screen.getByRole('button');

    expect(searchButtonElement).toHaveClass(
      'fixed top-4 right-4 z-50 sm:hidden'
    );
    expect(searchButtonElement).not.toHaveClass('hidden sm:flex');
  });

  it('should not apply floating styles when the floating prop is false', () => {
    render(<SearchButton>Search</SearchButton>);

    const searchButtonElement = screen.getByRole('button');

    expect(searchButtonElement).toHaveClass('hidden sm:flex');
    expect(searchButtonElement).not.toHaveClass(
      'fixed top-4 right-4 z-50 sm:hidden'
    );
  });
});
