import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EventCalendar from '../EventCalender/EventCalendar'
import EventCalendarMui from '../EventCalenderMui/EventCalendarMui'

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<EventCalendar />} />
      <Route path="/mui" element={<EventCalendarMui />} />
    </Routes>
  )
}

export default RouterComponent
