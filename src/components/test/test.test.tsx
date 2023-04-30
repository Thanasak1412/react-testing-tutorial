import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MyComponent from './test';

describe('MyComponent', () => {
  it('should update state when button is clicked', () => {
    render(<MyComponent />);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(screen.getByText('Button clicked!')).toBeInTheDocument();
  });
});
