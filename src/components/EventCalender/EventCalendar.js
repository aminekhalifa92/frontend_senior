import React from 'react'
import './styles.css'
import useController from './EventCalendar.controller'
import { Link } from 'react-router-dom'

const EventCalendar = () => {
  const { events, loading, error } = useController()
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <Link to="/mui">
        <button className="btn">Mui</button>
      </Link>
      <div className="calendar-container">
        {events.map((row, rowIndex) => (
          <div key={rowIndex} className="event-row">
            {row &&
              row.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className="event"
                  style={{ width: `${100 / row.length}%` }}
                >
                  {event.id}
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default EventCalendar
