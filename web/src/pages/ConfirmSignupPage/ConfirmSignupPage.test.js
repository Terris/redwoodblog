import { render, cleanup } from '@testing-library/react'

import ConfirmSignupPage from './ConfirmSignupPage'

describe('ConfirmSignupPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmSignupPage />)
    }).not.toThrow()
  })
})
