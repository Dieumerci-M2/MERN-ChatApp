import React from 'react'
import {Box, Avatar, Typography, ListItemAvatar} from '@mui/material'

const UserListItem = ({user, handleFunction}) => {
     
  return (
       <Box
          onClick={ handleFunction }
          sx={ {
            cursor: 'pointer',
            backgroundColor: '#E8E8E8',
              "&:hover": {
                  backgroundColor: '#38B2AC',
                  color: 'white'
              },
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            color: 'black',
           
          } }
          
      >
          
        <ListItemAvatar>
        <Avatar alt={user.name} src={user.picture} />
        </ListItemAvatar> 
        <Box>
          <Typography variant="body1" color="initial">{ user.name }</Typography>
          <Typography variant="body1" color="initial">Email : { user.email}</Typography>
        </Box>
    </Box>
  )
}

export default UserListItem