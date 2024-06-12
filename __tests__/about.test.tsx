import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from '../src/app/about/page';
 
describe('About Page', () => {
  it('renders a heading of about page', () => {
    render(<About />)
    const heading = screen.getByRole('heading', {
      name: /welcome About/i,
    })
    expect(heading).toBeInTheDocument()
  })
})