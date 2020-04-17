import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const renderApp = () => {
  return render(<App />);
};
test('renders the title', () => {
  const { getByText } = renderApp();
  const linkElement = getByText(/vid-19/i);
  expect(linkElement).toBeInTheDocument();
});
