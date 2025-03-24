import { render, screen } from '@testing-library/react';

import { Logo } from '@/components/Logo';

describe('verify the Logo component', () => {
  it('should render the Logo component', () => {
    // Arrange
    render(<Logo />);
    // Act
    const logoText = screen.getByRole('heading', { name: /radio browser/i });
    // Assert
    expect(logoText).toBeInTheDocument();
    expect(logoText).toHaveTextContent('Radio Browser');
    expect(logoText).toBeVisible();
  });
});
