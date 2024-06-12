import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import UserProfile from '../src/app/userprofile/page';

describe('UserProfile component', () => {
  test('renders user name and age', () => {
    render(<UserProfile name="Saurav" age={30} />);
    const nameElement = screen.getByText(/Saurav/i);
    const ageElement = screen.getByText(/Age: 30/i);

    expect(nameElement).toBeInTheDocument();
    expect(ageElement).toBeInTheDocument();
  });
});
