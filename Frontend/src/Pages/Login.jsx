import React, {useState} from 'react'
import { Stack, Button, TextField, Container, InputAdornment, Box, Tabs, Tab, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Login = () => {
  const [ value, setValue ] = useState( 0 )
  
  const changeTabs = (event, newTab) => {
    setValue(newTab)
  }
  return (
    <Container maxWidth="sm" >
      <Stack spacing={ 2 } mt={ 15 } sx={ { backgroundColor: 'white', borderRadius: '10px', } }>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={changeTabs} aria-label="basic tabs example">
            <Tab label="Login" />
            <Tab label="Sign-Up" />
          </Tabs>
        </Box>
        <Box sx={{ padding: 2 }}>
          {value === 0 && (
          <Stack spacing={ 2 }>
            <TextField label='Email' variant='outlined' size='small' type='mail' required></TextField>
            <TextField label='Password' variant='outlined' size='small' type='password'required InputProps={{endAdornment: <InputAdornment position='end'><Button variant='text' endIcon={<RemoveRedEyeIcon/>}></Button></InputAdornment>}}></TextField>
            <Button variant='contained'>Connexion</Button>
            <Button variant='text' >forgoted password</Button>
          </Stack>
          )}
          {value === 1 && (
            <Stack> 
              <Stack spacing={ 2 }>
                <TextField label='Nom' variant='outlined' size='small' type='name' required></TextField>
                <TextField label='Email' variant='outlined' size='small' type='mail' required></TextField>
                <TextField label='Password' variant='outlined' size='small' type='password' required InputProps={ { endAdornment: <InputAdornment position='end'><Button variant='text' endIcon={ <RemoveRedEyeIcon /> }></Button></InputAdornment> } }></TextField>
                  <TextField label='Confirm Password' variant='outlined' size='small' type='password' required InputProps={ { endAdornment: <InputAdornment position='end'><Button variant='text' endIcon={ <RemoveRedEyeIcon /> }></Button></InputAdornment> } }></TextField>
              </Stack>
              <Stack mt= {2} mb= {2}>
                <Typography variant="body1" color="initial">Upload your Picture</Typography>
                <Stack direction = 'row' spacing={ 2 } mt= {2} mb= {2}>
                  <Button variant='outlined' sx={ { color: '' } }>upload</Button>
                  <Typography>No picture choosen</Typography>
                </Stack>
                <Button variant='contained' mt={2}>Create an account</Button>
              </Stack>
          </Stack>
          )}
        </Box>
      </Stack>
    </Container>
  )
}

export default Login