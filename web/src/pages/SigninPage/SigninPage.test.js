import { render, cleanup } from '@testing-library/react'

import SigninPage from './SigninPage'

describe('SigninPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SigninPage />)
    }).not.toThrow()
  })
})
