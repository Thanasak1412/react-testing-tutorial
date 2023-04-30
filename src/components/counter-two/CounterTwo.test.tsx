import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CounterTwo from './CounterTwo';

describe('CounterTwo', () => {
  test('should render the component correctly', () => {
    render(<CounterTwo count={0} />);

    const counterTwoElem = screen.getByText(/counter two/i);
    expect(counterTwoElem).toBeInTheDocument();

    const countElem = screen.getByText(/0/i);
    expect(countElem).toHaveTextContent('0');
  });

  test('should renders the buttons and handler are called', async () => {
    // * Arrange
    const setState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [0 as number, setState]);
    const handleIncrement = jest.fn(() => setState((state: number) => state + 1));
    const handleDecrement = jest.fn(() => setState((state: number) => state - 1));

    render(
      <CounterTwo count={0} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    );

    const incrementButton = await screen.findByRole('button', {
      name: /increment/i,
    });
    expect(incrementButton).toBeInTheDocument();

    const decrementButton = await screen.findByRole('button', { name: /decrement/i });
    expect(decrementButton).toBeInTheDocument();

    // * Act
    await act(async () => await userEvent.click(incrementButton));

    // * Assert
    expect(handleIncrement).toBeCalledTimes(1);
  });
});
