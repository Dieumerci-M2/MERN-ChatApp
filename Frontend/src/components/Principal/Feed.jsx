import React from 'react';
import Box from '@mui/material/Box';
import ListChat from '../secondary/ListChat';
import Message from '../secondary/Message';
const Feed = () => {

  return (
    <Box flex = { 6 } p={ 2 }>
      <Box flex={3}><ListChat/></Box>
      <Box flex={3}><Message/></Box>
    </Box>
  );
}
export default Feed