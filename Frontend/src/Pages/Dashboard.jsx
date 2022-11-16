import React from 'react'
import Sidebar from '../components/Principal/Sidebar';
import Feed from '../components/Principal/Feed';
import Navbar from '../components/Principal/Navbar';
import { Stack, Box } from '@mui/material'
import { AccessAlarm, CloudDone, ThreeDRotation } from '@mui/icons-material';


const Dashboard = () => {
 
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} sx={{justifyContent:'space-between'}}>
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  )
}

export default Dashboard
