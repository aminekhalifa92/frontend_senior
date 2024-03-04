import React from 'react'
import { render } from '@testing-library/react'
import EventCalendar from './EventCalendar'
import useController from './EventCalendar.controller' // Import your custom hook here

jest.mock('./EventCalendar.controller') // Mock the useController hook

describe('EventCalendar', () => {
  const mockEvents = [
    [
      { id: 1, start: '10:00', duration: 60 },
      { id: 2, start: '11:30', duration: 90 },
    ],
    [{ id: 3, start: '13:00', duration: 120 }],
  ]

  it('renders loading message when loading is true', () => {
    useController.mockReturnValue({ loading: true })
    const { getByText } = render(<EventCalendar />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('renders error message when error is present', () => {
    const errorMessage = 'Error fetching events'
    useController.mockReturnValue({ error: errorMessage })
    const { getByText } = render(<EventCalendar />)
    expect(getByText(`Error: ${errorMessage}`)).toBeInTheDocument()
  })

  it('renders events correctly', () => {
    useController.mockReturnValue({ events: mockEvents })
    const { getByText } = render(<EventCalendar />)
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
  })
})
