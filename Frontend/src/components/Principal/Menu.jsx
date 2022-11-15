import React from 'react'
import { Stack, Button, TextField, Container } from '@mui/material'

const Menu = () => {
  return (
    <Container>
        <Button variant='contained' color='secondary' startIcon={<AccessAlarm/>}> Allarm</Button>
    </Container>
          
  )
}

export default Menu