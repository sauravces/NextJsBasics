import { render } from '@testing-library/react'
import About from '../src/app/about/page';
 
it('renders homepage unchanged', () => {
  const { container } = render(<About />)
  expect(container).toMatchSnapshot()
})