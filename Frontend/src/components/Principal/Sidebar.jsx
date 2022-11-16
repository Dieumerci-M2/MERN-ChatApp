import React from 'react'
import { Stack, Button, Box } from '@mui/material'

const Sidebar = () => {
  return (
    <Box sx={{ backgroundColor:'green', display : {xs:'none', sm:'block' }}} flex={4} p={2} >
         Sidebar 
    </Box>
  )
}

export default Sidebar