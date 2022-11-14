import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { Stack, Button, TextField, Container, InputAdornment, Box, Tabs, Tab, Typography, Alert, Snackbar} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Authentification = () => {
  const [ value, setValue ] = useState( 0 )
  const [ LogEmail, setLogEmail ] = useState()
  const [ LogPassword, setLogPassword ] = useState()
  const [ SignName, setSignName ] = useState()
  const [ SignEmail, setSignEmail ] = useState()
  const [ SignPassword, setSignPassword ] = useState()
  const [ SignConfirmPassword, setSignConfirmPassword ] = useState()
  const [ pic, setPic ] = useState()
  const [upload, setUpload] = useState(false)
  const [ hiden, setHiden ] = useState( true )
  
  const navigateTo = useNavigate()
  
  const handlePassword = () => {
     setHiden( !hiden )
  }
  
  const changeTabs = (event, newTab) => {
    setValue(newTab)
  }
  const submitHandler = async() => {
    setUpload( true )
    if ( !SignName || !SignEmail || !SignPassword || !SignConfirmPassword ) {
      console.log( 'please complete all the field' )
      setUpload(false)
    }
    if ( SignPassword !== SignConfirmPassword ) {
      console.log('please enter the some password')
      setUpload(false)
    }
    
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        mode : 'cors'
      }
      console.log('hay');
      const data  = await (fetch( 'http://localhost:6600/api/user', {
        method: 'POST',
        ...config,
        body: new URLSearchParams( { nom: 'pitchP4', email: 'pitchP4@gmail.com', password: '54321' })
      } ).then(data => data.json()))
      
      console.log( 'registration successful' )
      
      localStorage.setItem( 'data', JSON.stringify(data))
      navigateTo( '/chats' )

    } catch (error) {
      console.log('Error occured on the server');
      console.log(error);
      setUpload(false)
    }
  }
  const postDetails = async( tof ) => {
    setUpload( true )
    if ( tof === undefined ) {
      
      console.log('Enter an Image');
      return;
    }

    if ( tof.type === 'image/pjeg' || tof.type === 'image/png' || tof.type === 'image/jpg') {
      const data = new FormData()
      data.append( 'file', tof )
      data.append( 'upload_preset', 'chat-app' )
      data.append( 'cloud_name', 'md-chatapp-mern' )
      
      await fetch( 'https://api.cloudinary.com/v1_1/md-chatapp-mern/image/upload', {
        method: 'POST',
        body: data,
      } ).then( res => res.json() )
        .then( data => {
          setPic( data)
          console.log( data);
          setUpload(false)
        } )
        .catch( ( err ) => {
          console.log( err );
          setUpload(false)
        })
      
    } else {
       
      console.log('An Error occured');
      setUpload( false )
    }
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
            <TextField label='Email' variant='outlined' size='small' type='mail' required={true} onChange={(e)=> setLogEmail(e.target.value)}></TextField>
              <TextField label='Password' variant='outlined' size='small' type={hiden ? 'password': ''} required={ true } onChange={ ( e ) => setLogPassword(e.target.value)} InputProps={{endAdornment: <InputAdornment position='end'><Button variant='text' onClick={handlePassword} endIcon={hiden ? <VisibilityOffIcon/> : <VisibilityIcon/>}></Button></InputAdornment>}}></TextField>
            <Button variant='contained'>Connexion</Button>
            <Button variant='text' >forgoted password</Button>
          </Stack>
          )}
          {value === 1 && (
            <Stack> 
              <Stack spacing={ 2 }>
                <TextField label='Name' variant='outlined' size='small' type='name' required={true} onChange={(e)=> setSignName(e.target.value)}></TextField>
                <TextField label='Email' variant='outlined' size='small' type='mail' required={true} onChange={(e)=> setSignEmail(e.target.value)}></TextField>
                <TextField label='Password' variant='outlined' size='small' type={hiden ? 'password': ''} required={ true } onChange={ ( e ) => setSignPassword(e.target.value) } InputProps={ { endAdornment: <InputAdornment position='end'><Button variant='text' onClick={handlePassword} endIcon={ hiden ? <VisibilityOffIcon/> : <VisibilityIcon/> }></Button></InputAdornment> } }></TextField>
                  <TextField label='Confirm Password' variant='outlined' size='small' type={hiden ? 'password': ''} required={true} onChange={(e)=> setSignConfirmPassword(e.target.value)} InputProps={ { endAdornment: <InputAdornment position='end'><Button variant='text' onClick={handlePassword} endIcon={ hiden ? <VisibilityOffIcon/> : <VisibilityIcon/>}></Button></InputAdornment> } }></TextField>
              </Stack>
              <Stack id='pic' mt= {2} mb= {2}>
                <Typography variant="body1" color="initial">Upload your Picture</Typography>
                <Stack direction = 'row' spacing={ 2 } mt= {2} mb= {2}>
                  <TextField variant='outlined' size='small' type='file' p={1.5} accept='image/*' onChange={(e)=> postDetails(e.target.files[0])}></TextField>
                </Stack>
                <Button variant='contained' mt={2} isloading={upload ? 'loadind' : 'fetch'} onClick={submitHandler} >Create an account</Button>
              </Stack>
          </Stack>
          )}
        </Box>
      </Stack>
    </Container>
  )
}

export default Authentification