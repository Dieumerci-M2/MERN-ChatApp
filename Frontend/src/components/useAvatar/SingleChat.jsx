import React, { useState, useContext, useEffect } from 'react'
import './style.css'
import { toast } from 'react-toastify'
import { ChatContext } from '../../Context/Context'
import { Box, TextField, Typography, Skeleton, FormControl} from '@mui/material'
import ChatScrollable from './ChatScrollable'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Lottie from 'react-lottie'
import animationData from "../Animation/Lottie.json";

import io from "socket.io-client";

const ENDPOINT = 'https://mernchat-rtv3.onrender.com' 
let socket, selectedChatCompare

const SingleChat = ( { fetchAgain, setFetchAgain, toastOptions } ) => {
  const { user, selectedChat, setSelectedChat } = useContext( ChatContext )

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [ istyping, setIsTyping ] = useState( false );
  const [ open, setOpen ] = useState( false );
  
  const handleOpen = () => {
    setOpen(true);
  };

    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    };
  
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

   const sendMessage = async (event) => {
    if (event.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat._id);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "https://mernchat-rtv3.onrender.com/api/message",
          {
            content: newMessage,
            chatId: selectedChat,
          },
          config
        );
        socket.emit("new message", data);
        setMessages([...messages, data]);
      } catch (error) {
        toast.error(`Failed to send the Message`, toastOptions);
      }
    }
  };
  
    useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    }, [] )
  
     useEffect(() => {
    fetchMessages();

    selectedChatCompare = selectedChat;
  
  }, [selectedChat]);
  
   useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        if (!notification.includes(newMessageRecieved)) {
          setNotification([newMessageRecieved, ...notification]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessages([...messages, newMessageRecieved]);
      }
    });
   } );
  
    const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    const timerLength = 3000;
    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  return (
    <>
      { selectedChat ? (
      <>
          <Typography
            sx={ {
              display: { xs: '25px', md: '30px' },
              position: 'absolute',
              bottom: 0,
            } }
            pb={ 3 }
            px={ 2 }
            justifyContent={ { xs: 'space-between' } }
            alignItems='center'
            overflow='hidden'
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
                (

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleOpen}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
            )
              :
                (
                  <div className="messages">
                    <ChatScrollable messages={messages} />
                  </div>
                ) }
            
             <FormControl
              onKeyDown={sendMessage}
              id="first-name"
              isRequired
              mt={ 3 }
              
            >
              {istyping ? (
               
               <Lottie
                    options={defaultOptions}
                    width={70}
                    style={{ marginBottom: 15, marginLeft: 0 }}
                  />

              ) : (
                <></>
              )}
              <TextField
                variant="filled"
                bg="#E0E0E0"
                placeholder="Enter a message.."
                value={newMessage}
                onChange={ typingHandler }
                sx={{ width:'400px'}}
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