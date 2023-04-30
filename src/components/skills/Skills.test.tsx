import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Skills from './Skills';

describe('Skills', () => {
  const skills = ['JS', 'HTML', 'CSS'];

  test('should renders the component correctly', () => {
    render(<Skills skills={skills} />);

    const skillListElem = screen.getByRole('list');
    expect(skillListElem).toBeInTheDocument();
  });

  test('should renders a list of skills', () => {
    render(<Skills skills={skills} />);

    const skillListElem = screen.getAllByRole('listitem');
    expect(skillListElem).toHaveLength(skills.length);
  });

  test('should renders the login button', () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('should not renders the start learning button', () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole('button', { name: /start learning/i });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('should renders the start learning button when the login button clicked', async () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole('button', { name: /login/i });
    userEvent.click(loginButton);

    expect(loginButton).toBeInTheDocument();

    const startLearningButton = await screen.findByRole('button', { name: /start learning/i });
    expect(startLearningButton).toBeInTheDocument();
  });

  test('Start Learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: /start learning/i,
      },
      {
        timeout: 1005,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
