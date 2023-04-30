import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './Counter';

describe('Counter', () => {
  test('should renders the component correctly', () => {
    render(<Counter />);

    const countElem = screen.getByText(/0/i);
    expect(countElem).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    expect(incrementButton).toBeInTheDocument();

    const amountInputElem = screen.getByRole('spinbutton');
    expect(amountInputElem).toBeInTheDocument();

    const setButton = screen.getByRole('button', { name: /set/i });
    expect(setButton).toBeInTheDocument();
  });

  test('should renders the count with the initial state', () => {
    render(<Counter />);

    const countElem = screen.getByText(/0/i);
    expect(countElem).toHaveTextContent(/0/);
  });

  test('should renders the value of count with value of amount', async () => {
    render(<Counter />);

    const amountInputElem = screen.getByRole('spinbutton');

    await act(async () => await userEvent.type(amountInputElem, '20'));
    expect(amountInputElem).toHaveValue(20);
  });

  test('should renders the count depend on the amount value', async () => {
    render(<Counter />);

    const amountInputElem = screen.getByRole('spinbutton');
    await act(async () => await userEvent.type(amountInputElem, '20'));
    expect(amountInputElem).toHaveValue(20);

    const setButton = screen.getByRole('button', { name: /set/i });
    await act(async () => await userEvent.click(setButton));
    const counterElem = screen.getByText(/20/i);
    expect(counterElem).toBeInTheDocument();
    expect(counterElem).toHaveTextContent('20');
  });

  test('should increment the count when the increment button clicked', async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: /increment/i });

    await act(async () => await userEvent.click(incrementButton));

    const countElem = screen.getByRole('heading');
    expect(countElem).toHaveTextContent('1');
  });
});
