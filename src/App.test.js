import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Covid-19 Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
