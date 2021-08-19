import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('should be Home page', () => {
    render(<App/>)
    const title = screen.getByText('Home')
    expect(title).toBeInTheDocument()
  })
})