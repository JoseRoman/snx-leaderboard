import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Propose New Synth"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Propose New Synth/i);
  expect(linkElement).toBeInTheDocument();
});
