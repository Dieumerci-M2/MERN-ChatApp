import { Stack , Skeleton} from '@mui/material'
import React from 'react'

const ChatLoading = () => {
  return (
    <Stack mt={10} spacing={2}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={ false } /> 
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={ false } /> 
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={ false } /> 
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={ false } /> 
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={ false } /> 
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={ false } /> 
    </Stack>
  )
}

export default ChatLoading