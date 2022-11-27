import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const StyleModal = styled( Modal )( {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center'
})
const Message = () => {
  const [ Open, setOpen ] = useState( true )
  
  const handleOpen = () => {
    setOpen(false)
  }
  const handleClose = () => {
    setOpen(true)
  }
  return (
    <>
        {/* <Tooltip onClick={handleOpen} title="Add" sx={{position:'fixed', bottom:20, left:{xs:'calc(50% - 25px)', md:10}}}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
       </Tooltip>
       <Button onClick={handleOpen}>Open modal</Button>
        <StyleModal styleModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box width={400} heigth={10} bgcolor='white' p={3} borderRadius={5}>

        </Box>  
      </StyleModal> */}
    </>
  )
}

export default Message
