import React from 'react'
import { Box } from '@mui/material'

const Sidebar = () => {
  return (
    <Box sx={{ backgroundColor:'green', display : {xs:'none', sm:'block' }}} flex={3} p={2} >
         Sidebar 
    </Box>
  )
}

export default Sidebar