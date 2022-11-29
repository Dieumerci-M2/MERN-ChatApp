import React from 'react';
import Box from '@mui/material/Box';
import ListChat from '../secondary/ListChat';
import Message from '../secondary/Message';
import { Stack } from '@mui/system';
const Feed = ({toastOptions}) => {

  return (
    <Box flex={ 8 } p={ 2 }>
      <Stack direction='row' spacing={2}>
        <ListChat/>
        <Message toastOptions={ toastOptions} />
      </Stack>
    </Box>
  );
}
export default Feed