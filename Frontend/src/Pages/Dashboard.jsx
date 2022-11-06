import React, {useEffect} from 'react'
import { Stack, Button, Typography } from '@mui/material'
import { AccessAlarm, CloudDone, ThreeDRotation } from '@mui/icons-material';
import axios from 'axios'

const Dashboard = () => {
  const fetchData = async() => {
   await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response))
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <Stack spacing={4}>
      <Typography variant='h1'>ChatApp</Typography>
      <Stack spacing={2} direction='row'>
        <Button variant="contained">Hello Chats</Button>
        <Button variant="outline">Hello Chats</Button>
        <Button variant="text">Hello Chats</Button>
      </Stack>
      <Stack spacing={4} direction= 'row'>
        <Button variant='contained' color='secondary' startIcon={<AccessAlarm/>}> Allarm</Button>
        <Button variant='contained' color='info' endIcon={<ThreeDRotation/>}>Info</Button>
        <Button variant='contained' color='error'>danger</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='success' >Success</Button>
      </Stack>
    </Stack>
  )
}

export default Dashboard
