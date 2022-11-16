import React from 'react'
import Sidebar from '../components/Principal/Sidebar';
import Feed from '../components/Principal/Feed';
import { Stack, Button, TextField, Container } from '@mui/material'
import { AccessAlarm, CloudDone, ThreeDRotation } from '@mui/icons-material';


const Dashboard = () => {
 
  return (
    <div>
      <Sidebar />
      <Feed />
    </div>
  )
}

export default Dashboard
