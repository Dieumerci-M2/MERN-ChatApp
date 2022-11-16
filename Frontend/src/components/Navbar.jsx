import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import { Box, AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Avatar, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
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
  
} ) )

const SlyledBadge = styled( Badge )( ( { theme } ) => ( {
  '&.MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${ theme.palette.background.paper }`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100 %',
      heigth: '100 %',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content:'" "',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,

    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
} ) ) 

const SmalAvatar = styled( Avatar )( ( { theme } ) => ( {
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}))
  
const Navbar = () => {
 
  return (
    <AppBar position='sticky' sx={ { backgroundColor: '#263238' } }>
      <StyledToolbar>
        <Typography variant="h6" color="white" sx={{display : {xs:'none', sm:'block' }}}>ChatApp</Typography>
        <WhatsAppIcon sx={ { display: { xs: 'block', sm: 'none' } } } />
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon color="white" />
          </Badge>
          <SlyledBadge overlap='circular' anchorOrigin={{vertical: "top", horizontal: 'right'}}>
              <Avatar alt='md' src='../../assets/a.jpg'/>
          </SlyledBadge>
          <Badge overlap='circular' anchorOrigin={ { vertical: 'botton', horizontal: 'right' } }
            badgeContent={
                <SmalAvatar alt='md' src='../assets/a.jpg'/>
              }>
                <Avatar alt='delta' src='../assets/b.jpg'/>
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
          
  )
}

export default Navbar