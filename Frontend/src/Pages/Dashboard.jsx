import React, {useState, useEffect} from 'react'
import { Stack, Button, Typography, TextField } from '@mui/material'
import { AccessAlarm, CloudDone, ThreeDRotation } from '@mui/icons-material';
import axios from 'axios'

const Dashboard = () => {
  const [showBackend, setShowBackend] = useState([])
  const fetchData = async() => {
   await axios.get(import.meta.env.VITE_PORT + '/md/chats')
  .then(response => setShowBackend(response.data))
  }
  console.log( showBackend )
  
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <Stack spacing={4}>
      <Typography variant='4'>{ showBackend.menu}</Typography>
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
