import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Counter from '../src/app/counter/page';

describe('Counter component', () => {
  test('renders initial count', () => {
    render(<Counter />);
    const countElement = screen.getByText(/Current Count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Increment/i);
    fireEvent.click(buttonElement);
    const countElement = screen.getByText(/Current Count: 1/i);
    expect(countElement).toBeInTheDocument();
  });
});
