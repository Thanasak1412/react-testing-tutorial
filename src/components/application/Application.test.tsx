import { render, screen } from '@testing-library/react';

import Application from './Application';

describe('Application', () => {
  test('should the component renders correctly', () => {
    render(<Application />);

    const headerElem = screen.getByText(/Job application form/i);
    expect(headerElem).toBeInTheDocument();

    const paragraphElem = screen.getByText(/All fields are mandatory/i);
    expect(paragraphElem).toBeInTheDocument();

    const fullNameElem = screen.getByPlaceholderText('Fullname');
    expect(fullNameElem).toBeInTheDocument();

    const bioElem = screen.getByLabelText(/bio/i);
    expect(bioElem).toBeInTheDocument();

    const jobLocationSelectElem = screen.getByRole('combobox');
    expect(jobLocationSelectElem).toBeInTheDocument();

    const tcElem = screen.getByRole('checkbox');

    expect(tcElem).toBeInTheDocument();
  });
});
