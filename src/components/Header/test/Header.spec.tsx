import { render, screen } from '@testing-library/react';

import { Header } from '@/components/Header';

describe('verify the Header component', () => {
  it('should render the Header component', () => {
    // Arrange
    render(<Header />);
    // Act
    const headerText = screen.getByRole('heading', { name: /radio browser/i });
    // Assert
    expect(headerText).toBeInTheDocument();
    expect(headerText).toHaveTextContent('Radio Browser');
    expect(headerText).toBeVisible();
  });
});
