import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Example from './Example'

afterEach(cleanup)

describe('Example', () => {
  it('初期状態は0である', () => {
    const { getByTestId } = render(<Example />)
    expect(getByTestId('result')).toHaveTextContent('0')
  })
  it('ボタンをクリックすると1つカウントアップする', () => {
    const { getByTestId, getByText } = render(<Example />)
    fireEvent.click(getByText('Click me'))
    expect(getByTestId('result')).toHaveTextContent('1')  
  })
})