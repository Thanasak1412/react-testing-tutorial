// ParentComponent.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ParentComponent from './ParentComponent';

describe('ParentComponent', () => {
  it('updates count when button is clicked', () => {
    render(<ParentComponent />);
    const countElement = screen.getByTestId('count');
    const buttonElement = screen.getByText('Increment');
    expect(countElement).toHaveTextContent('0');
    fireEvent.click(buttonElement);
    expect(countElement).toHaveTextContent('1');
    fireEvent.click(buttonElement);
    expect(countElement).toHaveTextContent('2');
  });
});
