import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" mr={5}>
        <Typography variant="h6">Online Peeps</Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/236x/28/d6/45/28d645cc63195a72d9b385f5f0b681bd.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i.pinimg.com/236x/e2/12/a2/e212a266d041de74c7d2022be9322452.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/236x/18/97/71/189771ac769bf33442933995e3ab40c8.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://i.pinimg.com/236x/bb/41/30/bb4130b5efe00ef45677eb7a97450e99.jpg"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" mt={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/236x/bb/41/30/bb4130b5efe00ef45677eb7a97450e99.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/236x/e2/12/a2/e212a266d041de74c7d2022be9322452.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/236x/4e/43/fc/4e43fc0a39ca014ef3db0e2552c1919f.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6">Latest Tweets</Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/236x/99/0e/01/990e01caa59ca08c3e339ad0b1310d9b.jpg"
              />
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
              <Avatar
                alt="Travis Howard"
                src="https://i.pinimg.com/236x/0c/d3/81/0cd3816be7d930aeeb86ab7530ee9578.jpg"
              />
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
              <Avatar
                alt="Cindy Baker"
                src="https://i.pinimg.com/236x/8e/0c/11/8e0c11504389bcc3ba039034dc272b71.jpg"
              />
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
  );
};

export default Rightbar;
