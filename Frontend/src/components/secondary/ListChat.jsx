import React,{ useContext, useEffect, useState} from 'react'
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Box, Stack } from '@mui/material';
import { ChatContext } from '../../Context/Context';
import { toast } from 'react-toastify';


const ListChat = ( {fetchAgain, toastOptions } ) => {

  const { user, setSelectedChat,selectedChat, chats, setChats } = useContext( ChatContext )
  const [ loggedUser, setLoggedUser ] = useState()
  
  const fetchChats = async () => {
     
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const response = await axios.get("https://mernchat-rtv3.onrender.com/api/chat", config);
      
      const { data } = response;
      setChats( data );
      console.log(response);
    } catch (error) {
      toast.error( `Failed to load the chats`, toastOptions );
      console.log(error.message);
    }
  };

   useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("infoUser")));
    fetchChats();
    
  }, [fetchAgain])
  return (
    <Box
      sx={ {
        display: {
          xs: selectedChat ?
            'none' : 'flex',
          sm: 'flex',
        },
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        width: { xs: '100%', sm: '30%' },
        borderRadius: '10px',
        border: '1px solid gray',
        minHeight:'30rem'
      } }

      flex={ 4 }>
      <Box
        sx={ {
          fontSize: { xs: '25px', sm: '30px' },
          justifyContent: 'space-between',
          alignItems: 'center'
          
        } }
        pb={ 3 }
        px={ 3 }
        mt={3}
      >
        My Chats
      </Box>
      
    
      <Box
        sx={ {
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#F8F8F8',
          borderRadius: '10px',
          width: '80%',
          
          // height: '100%',
          overflow:'hidden'
        } }
        p={3}
      >
        
          <Stack
          sx={ { overflow: 'scroll' } }
          spacing={2}
          >
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bgcolor={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                p={1}
                sx={ {
                  borderRadius: "10px"
                }}
                
                key={chat._id}
              >
                
                <Typography>
                
                  {
                    
                    chat.chatName
                   
                  }
                </Typography>
                {chat.latestMessage && (
                  <Typography fontSize="xs">
                    <b>{chat.latestMessage.sender.name} : </b>
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>
      </Box>
    </Box>
  );
}

export default ListChat