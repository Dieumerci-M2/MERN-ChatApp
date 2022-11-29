import React, {useState} from 'react';
import Box from '@mui/material/Box';
import ListChat from '../secondary/ListChat';
import Message from '../secondary/Message';
import { Stack } from '@mui/system';
const Feed = ( { toastOptions } ) => {
  
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <Box flex={ 8 } p={ 2 }>
      <Stack direction='row' spacing={2}>
        <ListChat fetchAgain={ fetchAgain } toastOptions={ toastOptions} />
        <Message fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} toastOptions={ toastOptions} />
      </Stack>
    </Box>
  );
}
export default Feed