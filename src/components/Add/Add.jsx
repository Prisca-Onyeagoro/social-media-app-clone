import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { styled } from '@mui/system';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import VideoSettings from '@mui/icons-material/VideoSettings';
import Photo from '@mui/icons-material/Photo';
import PersonAdd from '@mui/icons-material/PersonAdd';
import DateRange from '@mui/icons-material/DateRange';
const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  margin: '20px',
});
const StyledTextField = styled(TextField)({
  color: 'white',
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color="error" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor="white"
          p={3}
          borderRadius={5}
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <Typography variant="h6" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Agnes Walker"
              src="https://i.pinimg.com/236x/bb/41/30/bb4130b5efe00ef45677eb7a97450e99.jpg"
            />
            <Typography variant="span" fontWeight={500}>
              John Doe
            </Typography>
          </UserBox>
          <StyledTextField
            sx={{ width: '100%', color: 'white' }}
            id="outlined-multiline-static"
            Multiline
            rows={4}
            placeholder="whats on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="warning" />
            <Photo color="success" />
            <VideoSettings color="error" />
            <PersonAdd color="primary" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
