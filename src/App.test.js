import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello from app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello from App/i);
  expect(linkElement).toBeInTheDocument();
});
