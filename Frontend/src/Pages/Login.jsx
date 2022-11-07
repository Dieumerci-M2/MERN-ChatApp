import React from 'react'
import { Stack, Button, TextField, Container } from '@mui/material'

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Stack spacing = {2} mt={20} p={5} color='warning' sx ={{backgroundColor: 'white', borderRadius: '10px', width: 300, }}>
        <TextField label='Email' variant='outlined' size='small'></TextField>
        <TextField label='Password' variant='outlined' size='small'></TextField>
        <Button variant='contained'>Connexion</Button>
        <Button variant='text' >Mot de passe oublié</Button>
        <Button variant='outlined'>Sing-Up</Button>
      </Stack>
    </Container>
  )
}

export default Login