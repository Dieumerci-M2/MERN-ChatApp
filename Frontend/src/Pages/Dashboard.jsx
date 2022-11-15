import React from 'react'
import Menu from '../components/Principal/Menu'
import Body from '../components/Principal/Body'
import { Stack, Button, TextField, Container } from '@mui/material'
import { AccessAlarm, CloudDone, ThreeDRotation } from '@mui/icons-material';


const Dashboard = () => {
 
  return (
    <Container maxWidth="sm" >
      <Stack direction='row' sx={ { backgroundColor: 'dark', borderRadius: '10px', } }>
        
        <Menu />
        
      </Stack>
    </Container>
  )
}

export default Dashboard
