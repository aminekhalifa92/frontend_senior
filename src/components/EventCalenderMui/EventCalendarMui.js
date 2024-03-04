import React from 'react'
import useController from './EventCalendarMui.controller'
import { Box, Paper, Typography, CircularProgress, Button } from '@mui/material'
import { Link } from 'react-router-dom'
const EventCalendarMui = () => {
  const { events, loading, error } = useController()
  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return <Typography>Error: {error}</Typography>
  }

  return (
    <>
      <Link to="/">
        <Button variant="contained" className="btn">
          Basic
        </Button>
      </Link>
      <Box mt={2} p={2}>
        {events.map((row, rowIndex) => (
          <Box key={rowIndex} display="flex" mb={2}>
            {row &&
              row.map((event, eventIndex) => (
                <Paper
                  key={eventIndex}
                  elevation={3}
                  style={{
                    flex: `0 0 ${100 / row.length}%`,
                    margin: '0 2px',
                    height: '100%',
                  }}
                >
                  <Box p={1}>
                    <Typography variant="body1">{event.id}</Typography>
                    <Typography variant="body2">
                      Start: {event.start}, Duration: {event.duration} mins
                    </Typography>
                  </Box>
                </Paper>
              ))}
          </Box>
        ))}
      </Box>
    </>
  )
}

export default EventCalendarMui
