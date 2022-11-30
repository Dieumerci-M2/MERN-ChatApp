import React, { useState, useContext } from 'react'
import { toast } from 'react-toastify'
import { ChatContext } from '../../Context/Context'
import {Box, Typography} from '@mui/material'

const SingleChat = ( { fetchAgain, setFetchAgain, toastOptions } ) => {
  const { user, selectedChat, setSelectedChat } = useContext( ChatContext )

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  
  return (
    <>
      { selectedChat ? (
      <>
          <Typography
            sx={ {
              display: { xs: '25px', md: '30px' },
              width: '100%'
            
            } }
            pb={ 3 }
            px={ 2 }
            justifyContent={ { xs: 'space-between' } }
            alignItems='center'
            overflow={hidden}
          >

        </Typography>
          <Box
          sx={ {
          backgroundColor: '#E8E8E8',
          width: '100%',
          height: '100%',
          borderRadius:'5px'
          } }
          p={ 3 }
          justifyContent='flex-end'
          >
            {
              loading ?
                'loading' :
                '' }
        </Box>  
      </>

      ) : (
          
          <Box d="flex" alignItems="center" justifyContent="center" h="100%">
            <Typography fontSize="20px" pb={3} justifyContent='center' >
              Click on a user to start chatting
            </Typography>
          </Box>
      ) }
  </>
    
  )
}

export default SingleChat