import React, { useState, useContext } from 'react'
import { toast } from 'react-toastify'
import { ChatContext } from '../../Context/Context'
import { Box, TextField, Typography } from '@mui/material'
import ChatScrollable from './ChatScrollable'

const SingleChat = ( { fetchAgain, setFetchAgain, toastOptions } ) => {
  const { user, selectedChat, setSelectedChat } = useContext( ChatContext )

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [ istyping, setIsTyping ] = useState( false );
  
    const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `https://mernchat-rtv3.onrender.com/api/message/${selectedChat._id}`,
        config
      );
      setMessages(data);
      setLoading(false);

      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast.error(`Failed to load the message`, toastOptions);
    }
  };

  
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
                (
                  <div className="messages">
                    <ScrollableChat messages={messages} />
                  </div>
                ) }
            
             <FormControl
              onKeyDown={''}
              id="first-name"
              isRequired
              mt={3}
            >
              {istyping ? (
                <div>
                  <Lottie
                    options={defaultOptions}
                    // height={50}
                    width={70}
                    style={{ marginBottom: 15, marginLeft: 0 }}
                  />
                </div>
              ) : (
                <></>
              )}
              <TextField
                variant="filled"
                bg="#E0E0E0"
                placeholder="Enter a message.."
                value={newMessage}
                onChange={typingHandler}
              />
            </FormControl>
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