import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Application from './Application';

describe('Application', () => {
  test('should the component renders correctly', () => {
    render(<Application />);

    const headerElem = screen.getByText(/Job application form/i);
    expect(headerElem).toBeInTheDocument();

    const paragraphElem = screen.getByText(/All fields are mandatory/i);
    expect(paragraphElem).toBeInTheDocument();

    const fullNameElem = screen.getByPlaceholderText('Full Name');
    expect(fullNameElem).toBeInTheDocument();

    const bioElem = screen.getByLabelText(/bio/i);
    expect(bioElem).toBeInTheDocument();

    const jobLocationSelectElem = screen.getByRole('combobox');
    expect(jobLocationSelectElem).toBeInTheDocument();

    const tcElem = screen.getByRole('checkbox');

    expect(tcElem).toBeInTheDocument();
  });

  test('should changes the full name', async () => {
    render(<Application />);

    const inputFullNameElem = screen.getByPlaceholderText(/full name/i);

    await act(async () => await userEvent.type(inputFullNameElem, 'test test'));

    expect(inputFullNameElem).toHaveValue('test test');
  });
});
