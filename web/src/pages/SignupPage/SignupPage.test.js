import { render, cleanup } from '@testing-library/react'

import SignupPage from './SignupPage'

describe('SignupPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SignupPage />)
    }).not.toThrow()
  })
})
