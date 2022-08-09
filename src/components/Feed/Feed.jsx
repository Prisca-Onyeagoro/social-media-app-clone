import { Box } from '@mui/system';
import React from 'react';
import Posts from '../Posts/Posts';

const Feed = () => {
  return (
    <Box flex={5} p={2}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
};

export default Feed;
