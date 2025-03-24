import { render, screen } from '@testing-library/react';

import { FavoritesHeader } from '@/components/FavoritesHeader';

describe('verify the FavoritesHeader component', () => {
  it('should render the FavoritesHeader component', () => {
    // Arrange
    render(<FavoritesHeader />);
    // Act
    const headerText = screen.getByRole('heading', {
      name: /favorites radios/i
    });
    // Assert
    expect(headerText).toBeInTheDocument();
    expect(headerText).toHaveTextContent('FAVORITES RADIOS');
    expect(headerText).toBeVisible();
  });
});
