import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import Post from './Post';

const Rightbar = () => {
  return (
   <Box sx={ { display: { xs: 'none', sm: 'block' } } } flex={ 2 } p={ 2 } >
      <Box position='fixed'>
        <Box mt={1} sx={{borderButtom:'1px solid black'}}>
          <Typography fontWeight={ 200 }>Online Friends</Typography>
        </Box>
        <Box mt={1} p={1}>
          <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src="../src/assets/b.jpg" />
          <Avatar alt="Travis Howard" src="../src/assets/c.jpg" />
          <Avatar alt="Cindy Baker" src="../src/assets/d.jpg" />
          <Avatar alt="Agnes Walker" src="../src/assets/e.jpg" />
          <Avatar alt="Trevor Henderson" src="../src/assets/f.jpg" />
          </AvatarGroup>
        <Box mt={1} sx={{borderButtom:'1px solid black'}}>
          <Typography fontWeight={ 200 }>Latest Pictures</Typography>
        </Box>
        <Box mt={2}>
            <ImageList rowHeight={100} cols={3} gap={5}>
            <ImageListItem>
                <img
                  src='../src/assets/f.jpg'
                  alt=""
                />  
            </ImageListItem>
            <ImageListItem>
                <img
                  src='../src/assets/g.jpeg'
                  alt=""
                />  
            </ImageListItem> 
            <ImageListItem>
                <img
                  src='../src/assets/d.jpg'
                  alt=""
                />  
            </ImageListItem>  
          </ImageList>
        <Box mt={2}>
            <Typography fontWeight={ 200 } >View Profile</Typography>  
        </Box>  
        <Post/>
        </Box>  
      </Box>
    </Box>
  </Box>
  )
}


export default Rightbar