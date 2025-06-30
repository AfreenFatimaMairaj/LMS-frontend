import React from 'react'
import { Container, Typography } from '@mui/material'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h3" mt={5} mb={3}>
          Welcome to Dashboard!
        </Typography>
      </Container>
    </>
  )
}

export default Dashboard
