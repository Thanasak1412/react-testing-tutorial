import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../mocks/server';

import Users from './Users';

describe('Users', () => {
  test('should renders the component correctly', () => {
    render(<Users />);

    const textUsersElem = screen.getByText(/users/i);
    expect(textUsersElem).toBeInTheDocument();

    const userListElem = screen.getByRole('list');
    expect(userListElem).toBeInTheDocument();
  });

  test('should renders the list item', async () => {
    render(<Users />);

    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(3);
  });

  test('should renders the error', async () => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (_, res, ctx) => res(ctx.status(500)))
    );

    render(<Users />);

    const errorElem = await screen.findByText(/error fetching users/i);
    expect(errorElem).toBeInTheDocument();
  });

  test('fetches and displays users', async () => {
    const mockData = [{ name: 'John Doe' }, { name: 'Jane Doe' }];

    const fetchMock = jest.fn(() => Promise.resolve(new Response(JSON.stringify(mockData))));
    global.fetch = fetchMock;

    render(<Users />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');

    fetchMock.mockClear();
  });
});
