import React from 'react'
import { Stack, Button, TextField } from '@mui/material'
import { AccessAlarm, CloudDone, ThreeDRotation } from '@mui/icons-material';


const Dashboard = () => {
 
  
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant="contained">Hello Chats</Button>
        <Button variant="outline">Hello Chats</Button>
        <Button variant="text">Hello Chats</Button>
      </Stack>
      <Stack spacing={4} direction= 'row'>
        <Button variant='contained' color='secondary' startIcon={<AccessAlarm/>}> Allarm</Button>
        <Button variant='contained' color='info' endIcon={<ThreeDRotation/>}>Info</Button>
        <Button variant='contained' color='error' startIcon={<CloudDone/>}>danger</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='success' >Success</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField label='Name' variant='filled' size='small'></TextField>
      </Stack>
    </Stack>
  )
}

export default Dashboard
