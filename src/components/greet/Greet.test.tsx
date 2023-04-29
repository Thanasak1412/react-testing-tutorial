import { render, screen } from '@testing-library/react';

import Greet from './Greet';

describe('Greet', () => {
  test('should renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);

    expect(textElement).toBeInTheDocument();
  });

  test('should renders with name props', () => {
    render(<Greet name="Test" />);
    const textElement = screen.getByText(/hello test/i);

    expect(textElement).toBeInTheDocument();
  });

  test('should renders the name with the default props', () => {
    render(<Greet />);
    const textELement = screen.getByText(/hello guest/i);

    expect(textELement).toBeInTheDocument();
  });
});
