import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Profile from '../src/app/profile/page';

describe('Profile component', () => {
  test('renders welcome message', () => {
    render(<Profile />);
    const headingElement = screen.getByText(/welcome Profile/i);
    expect(headingElement).toBeInTheDocument();
  });
  test('has correct metadata', () => {
    render(<Profile />);
  });
});
