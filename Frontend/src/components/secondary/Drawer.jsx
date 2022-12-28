import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField, Backdrop, CircularProgress, FormControl} from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import ChatLoading from '../useAvatar/ChatLoading';
import UserListItem from '../useAvatar/UserListItem';


const style = {
  position: 'absolute',
  top: '25%',
  left: '9%',
  transform: 'translate(-50%, -50%)',
  width: 230,
  height: 150,
  bgcolor: 'background.paper',
  boxShadow: 32,
  p: 2,

};

export default function Drawer({toastOptions, user, accessChat, loadingChat}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen( false );
  const [ search, setSearch ] = useState( "" )
  const [ searchResult, setSearchResult ] = useState( [] )
  const [loading, setLoading] = useState(false);
  
  
  const onclickHandler = async() => {
    if ( !search ) {
      toast.error( 'Please enter something to search' , toastOptions)
    }

    try {
      setLoading(true)
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${ user.token}`,
        },
      }
    
      const reponse  = await axios.get( `https://mernchat-backend.onrender.com/api/user?search=${ search }`, config )
      const {data} = reponse
      setLoading(false)
      setSearchResult( data )
      
    } catch (error) {
      toast.error( `Failed to search on the server`, toastOptions )
      console.log(error.message);
    }
  }
  return (
    <div>
      <Button onClick={handleOpen} variant='text'></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            Search User
          </Typography>
          <Stack direction='row' mt={ 2 }>
            <FormControl
              onKeyDown={ onclickHandler }
            >
              <TextField
              id="outlined-basic"
              label="Search name or email"
              variant="outlined"
              value={ search }
              onChange={(e)=> setSearch(e.target.value)}
            />
            </FormControl> 
            <Button variant='white' onClick={onclickHandler}>Go</Button>
          </Stack> 
         
          { loading ?
            <ChatLoading style={ style } /> :
            (
              searchResult?.map((user) => (
                  <UserListItem
                  key={ user._id }
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                  />
              ))
            ) }
          { (
            <Backdrop
              open={loadingChat}
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              >
            <CircularProgress color="inherit" />
            </Backdrop>
           )
          }
        </Box>
      </Modal>
    </div>
  );
}