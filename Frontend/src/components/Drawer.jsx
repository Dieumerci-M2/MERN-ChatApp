import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '20%',
  left: '10%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  boxShadow: 32,
  p: 2,

};

export default function Drawer({toastOptions}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen( false );
  const [search, setSearch] = useState("")

  const onclickHandler = () => {
    if ( !search ) {
      toast.error( 'Please enter something to search' , toastOptions)
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
          <Stack direction='row' mt={2}>
            <TextField
              id="outlined-basic"
              label="Search name or email"
              variant="outlined"
              value={ search }
              onChange={(e)=> setSearch(e.target.value)}
            />
            <Button vriant='ghost' onClick={onclickHandler}>Go</Button>
          </Stack>
         
        </Box>
      </Modal>
    </div>
  );
}