import React,{ useContext, useState} from 'react'
import { Box } from '@mui/material';
import SingleChat from '../useAvatar/SingleChat';
import { ChatContext } from '../../Context/Context';

const Message = ({ fetchAgain, setFetchAgain, toastOptions }) => {
  
  const {setSelectedChat} = useContext( ChatContext )
  
  return (
    <Box
    
      sx={ {
        display: {
          xs: setSelectedChat ? 'flex':'none',
          sm: 'flex',
          width: { xs: '100%', sm: '30%' },
          minHeight:'30rem'
        },
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '10px',
        border: '1px solid gray'
        
      } } 
      p={ 3 }
      flex={4}
    >
      <SingleChat
        fetchAgain={ fetchAgain }
        setFetchAgain={ setFetchAgain }
        toastOptions={ toastOptions }
      />
     
    </Box>
  )

}

export default Message
