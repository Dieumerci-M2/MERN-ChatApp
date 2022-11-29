import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  useEffect( () => {
    const userInfo = JSON.parse( localStorage.getItem( 'infoUser' ) )
    if ( userInfo ) {
      navigateTo('/chats')
    }
  },[navigateTo])
  
  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handlePassword = () => {
     setHiden( !hiden )
  }
  const ConnectHandler = async() => {
    setUpload( true )
    if ( !LogEmail || !LogPassword ) {
      toast.error( 'complete all the field' , toastOptions)
      setUpload( false )
      return
    }
  
    try {
       const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        mode : 'cors'
       }
      
      const { data } = await axios.post( "http://localhost:6600/api/user/login", { email: LogEmail, password: LogPassword }, config )
      
       toast.success( 'registration successful', toastOptions )
      console.log(data);
      localStorage.setItem( 'InfoUser', JSON.stringify(data))
      navigateTo( '/chats' )
      setUpload(false)

      
    } catch (error) {
      toast.error(`You haven't an Account please create an account`, toastOptions);
      setUpload(false)
    }
  }
  const changeTabs = (event, newTab) => {
    setValue( newTab )
  }
  const submitHandler = async() => {
    setUpload( true )
    if ( !SignName || !SignEmail || !SignPassword || !SignConfirmPassword ) {
      toast.warning( 'please complete all the field', toastOptions )
      setUpload(false)
    }
    if ( SignPassword !== SignConfirmPassword ) {
      toast.warning('please enter the some password', toastOptions)
      setUpload(false)
    }
    
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        mode : 'cors'
      }
  
      const data  = await (fetch( 'http://localhost:6600/api/user', {
        method: 'POST',
        ...config,
        body: new URLSearchParams( { nom : SignName, email : SignEmail, password : SignPassword})
      } ).then(data => data.json()))
      
      toast.success( 'registration successful', toastOptions )
      
      localStorage.setItem( 'data', JSON.stringify(data))
      navigateTo( '/chats' )

    } catch (error) {
      toast.error('Error occured on the server', toastOptions);
      setUpload(false)
    }
  }
  const postDetails = async( tof ) => {
    setUpload( true )
    if ( tof === undefined ) {
      
      toast.warning( 'Enter an Image', toastOptions)
      return;
    }

    if ( tof.name === 'image/pjeg' || tof.name === 'image/png' || tof.name === 'image/jpg') {
      const data = new FormData()
      data.append( 'file', tof )
      data.append( 'upload_preset', 'chat-app' )
      data.append( 'cloud_name', 'md-chatapp-mern' )
      
      await fetch( 'https://api.cloudinary.com/v1_1/md-chatapp-mern/image/upload', {
        method: 'POST',
        body: data,
      } ).then( res => res.json() )
        .then( data => {
          setPic( data.url)
          setUpload(false)
        } )
        .catch( ( err ) => {
          toast.error( err, toastOptions)
          setUpload(false)
        })
      
    } else {
       
      toast.error('An Error occured', toastOptions);
      setUpload( false )
    }
  }
  return (
    <Container maxWidth="sm" bgcolor={'#f5f5f5'}>
      <Stack spacing={ 2 } mt={ 15 } sx={ { backgroundColor: 'initial', borderRadius: '10px', border:'1px solid #cfd8dc' } }>
        <Box sx={{ borderBottom: 1, borderColor: '#cfd8dc' }}>
          <Tabs value={value} onChange={changeTabs} aria-label="basic tabs example" >
            <Tab label="Login" />
            <Tab label="Sign-Up" />
          </Tabs>
        </Box>
        <Box sx={{ padding: 2 , color:'white'}}>
          {value === 0 && (
          <Stack spacing={ 2 }>
            <TextField label='Email' variant='outlined' size='small' type='mail' required={true} onChange={(e)=> setLogEmail(e.target.value)} sx={{color:'white', border:'1px solid white', borderRadius:'5px'}}></TextField>
            <TextField label='Password' variant='outlined' size='small' type={hiden ? 'password': ''} sx={{color:'white', border:'1px solid white', borderRadius:'5px'}} required={ true } onChange={ ( e ) => setLogPassword(e.target.value)} InputProps={{endAdornment: <InputAdornment position='end'><Button  onClick={handlePassword} endIcon={hiden ? <VisibilityOffIcon/> : <VisibilityIcon/>}></Button></InputAdornment>}}></TextField>
            <Button variant='contained' onClick={ConnectHandler}>Connexion</Button>
            <Button variant='text' sx={{color:'white'}} >forgoted password</Button>
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
      <ToastContainer />
    </Container>
  )
}

export default Authentification