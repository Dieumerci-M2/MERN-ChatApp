
import React,{useState, useEffect} from 'react';
import Feed from '../components/Principal/Feed'
import Sidebar from '../components/Principal/Sidebar'
import Rightbar from '../components/Principal/RightBar'
import Navbar from '../components/Principal/Navbar'
import { Box, createTheme, Stack } from '@mui/material'
import AddPost from '../components/secondary/AddPost'
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {


  const [ mode, setMode ] = useState( 'light' )
  
  const darkTheme = createTheme( {
    palette: {
      mode: mode,
    }
  } )
  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar toastOptions={ toastOptions} /> 
      <Stack direction='row' spacing={2} sx={{justifyContent:'space-between'}}>
          <Sidebar setMode={ setMode } mode={ mode} />
        <Feed />
        <Rightbar />
      </Stack>
        <AddPost />
        <ToastContainer/>
    </Box>
  </ThemeProvider>
    
  )
}

export default Dashboard
