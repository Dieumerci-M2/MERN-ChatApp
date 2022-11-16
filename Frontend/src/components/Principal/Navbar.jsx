import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import { Box, AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Padding } from '@mui/icons-material'

 const StyledToolbar = styled( Toolbar )( {
    display: 'flex',
    justifyContent:'space-between',
 } )
const Search = styled( 'div' )( ( { theme } ) => ( {
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
} ) )
  
const Icons = styled( Box )( ( { theme } ) => ( {
  backgroundColor: 'white',

}))
  
const Navbar = () => {
 
  return (
    <AppBar position='sticky' sx={ { backgroundColor: '#263238' } }>
      <StyledToolbar>
        <Typography variant="h6" color="white" sx={{display : {xs:'none', sm:'block' }}}>ChatApp</Typography>
        <WhatsAppIcon sx={ { display: { xs: 'block', sm: 'none' } } } />
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>icon</Icons>
      </StyledToolbar>
    </AppBar>
          
  )
}

export default Navbar