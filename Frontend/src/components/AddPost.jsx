import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ButtonGroup from '@mui/material/ButtonGroup';
import MicOffIcon from '@mui/icons-material/MicOff';
import { styled } from '@mui/material/styles';
import { Avatar, TextField, Stack } from '@mui/material';

const StyleModal = styled( Modal )( {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center'
} )

const UserBox = styled( Box )( {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom:'20px'
})
const AddPost = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen( false );
    
  return (
    <>
        <Tooltip onClick={handleOpen} title="Add" sx={{position:'fixed', bottom:20, left:{xs:'calc(50% - 25px)', md:10}}}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
       </Tooltip>
       
        <StyleModal styleModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
          <Typography variant='h6' color='gray' textAlign='center'>Create a Post</Typography>
          <UserBox>
            <Avatar alt="Remy Sharp" src="../src/assets/a.jpg"
            sx={{width:30, height:30}}
            />
            <Typography fontWeight={500} >Dieme Md</Typography>
          </UserBox>
          <TextField
            sx={{width:'100%'}}
            id='standard-multiline-static'
            multiline
            rows={ 3 }
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack direction='row' spacing={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color='info'/>
            <InsertPhotoIcon color='error'/>
            < MicOffIcon color='success' />
            <VideoChatIcon color='warning' />
            <AccountBoxIcon color='secondary'/>
          </Stack>
          <ButtonGroup fullWidth variant='contained'>
            <Button>Post</Button>
            <Button sx={{width:'100px'}}><DateRangeIcon/></Button>
          </ButtonGroup>
        </Box> 
      </StyleModal>
    </>
  )
}

export default AddPost