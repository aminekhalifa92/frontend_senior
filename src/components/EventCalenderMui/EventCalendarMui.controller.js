import { useState, useEffect } from 'react'
import eventsData from '../../data/events'

const useController = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      try {
        eventsData.sort((a, b) => a.start.localeCompare(b.start))

        const newRows = []
        let currentRow = []

        eventsData.forEach((item) => {
          let overlappingFound = false

          currentRow.forEach((rowEvent) => {
            if (
              item.start < rowEvent.start + rowEvent.duration &&
              item.start + item.duration > rowEvent.start
            ) {
              overlappingFound = true
            }
          })

          if (overlappingFound) {
            newRows.push(currentRow)
            currentRow = []
          }

          currentRow.push(item)
        })

        if (currentRow.length > 0) {
          newRows.push(currentRow)
        }

        setEvents(newRows)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return { events, loading, error }
}

export default useController
