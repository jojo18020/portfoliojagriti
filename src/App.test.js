import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders site header with navigation links', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(within(header).getByText('Jagriti Jain')).toBeInTheDocument();
  expect(within(header).getByRole('link', { name: /skills/i })).toBeInTheDocument();
});