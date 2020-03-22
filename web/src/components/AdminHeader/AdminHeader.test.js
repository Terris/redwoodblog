import { render, cleanup } from '@testing-library/react'

import AdminHeader from './AdminHeader'

describe('AdminHeader', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AdminHeader />)
    }).not.toThrow()
  })
})
