import { render, screen } from '../../test-utils';

import MuiMode from './MuiMode';

describe('MuiMode', () => {
  test('should renders the text correctly', () => {
    render(<MuiMode />);
    const modeElem = screen.getByRole('heading');

    expect(modeElem).toHaveTextContent('dark mode');
  });

  test('should renders the text in white color for dark mode', () => {
    render(<MuiMode />);

    const modeElem = screen.getByRole('heading');
    expect(modeElem).toHaveStyle({ color: "'rgb(255, 255, 255)'" });
  });
});
