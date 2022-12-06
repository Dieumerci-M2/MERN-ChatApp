
import React,{useState, useContext} from 'react';
import Feed from '../components/Principal/Feed'
import Sidebar from '../components/Principal/Sidebar'
import Rightbar from '../components/Principal/RightBar'
import Navbar from '../components/Principal/Navbar'
import { Box, createTheme, Stack } from '@mui/material'
import AddPost from '../components/secondary/AddPost'
import { ThemeProvider } from '@emotion/react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChatContext } from '../Context/Context';

const Dashboard = () => {

  const {user} = useContext(ChatContext)
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
      <Box bgcolor={'#f5f5f5'} color={'text.primary'}>
        { user && <Navbar toastOptions={ toastOptions} /> }
      <Stack direction='row' spacing={2} sx={{justifyContent:'space-between'}}>
          {/* { user && <Sidebar setMode={ setMode } mode={ mode } /> } */}
          { user && <Feed toastOptions={ toastOptions } /> }
          {/* { user && <Rightbar /> } */}
      </Stack>
        {/* <AddPost /> */}
        <ToastContainer />
      </Box>
  </ThemeProvider> 
  )
}

export default Dashboard
