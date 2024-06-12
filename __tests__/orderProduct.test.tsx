import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation';
import OrderProduct from '../src/app/order-product/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('OrderProduct component', () => {
  it('renders the heading and button', () => {
    render(<OrderProduct />);
    const heading = screen.getByRole('heading', {
      name: /order product/i,
    });
    expect(heading).toBeInTheDocument();
    const button = screen.getByRole('button', {
      name: /place order/i,
    });
    expect(button).toBeInTheDocument();
  });

  it('calls router.push on button click', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
    render(<OrderProduct />);
    const button = screen.getByRole('button', {
      name: /place order/i,
    });
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/');
  });
});
