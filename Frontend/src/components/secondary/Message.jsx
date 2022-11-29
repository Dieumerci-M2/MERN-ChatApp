import React,{ useContext, useState} from 'react'
import { Box } from '@mui/material';
import SingleChat from '../useAvatar/SingleChat';
import { ChatContext } from '../../Context/Context';

const Message = ({ fetchAgain, setFetchAgain }) => {
  
  const {setSelectedChat} = useContext( ChatContext )
  
  return (
    <Box
    
      sx={ {
        display: {
          xs: setSelectedChat ? 'flex':'none',
          sm: 'flex',
        },
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        width: { xs: '100%', sm: '30%' },
        borderRadius: '10px',
        border:'1px solid gray'
      } } 
      p={ 3 }
      flex={4}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  )

}

export default Message
