import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';


const Rightbar = () => {
  return (
   <Box sx={ { display: { xs: 'none', sm: 'block' } } } flex={ 2 } p={ 2 }>
      <Box position='fixed'>
        <Box mt={1} sx={{borderButtom:'1px solid black'}}>
          <Typography fontWeight={ 200 }>Online Friends</Typography>
        </Box>
        <Box mt={1}>
          <AvatarGroup max={4}>
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
            <Typography fontWeight={ 200 } >Latest Convesations</Typography>  
          </Box>  
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="../src/assets/b.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="../src/assets/d.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="../src/assets/f.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
   
        </Box>  
      </Box>
    </Box>
  </Box>
  )
}


export default Rightbar