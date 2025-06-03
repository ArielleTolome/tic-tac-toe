import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tic Tac Toe game with initial status', () => {
  render(<App />);
  const statusElement = screen.getByText(/Next player: X/i);
  expect(statusElement).toBeInTheDocument();
});
