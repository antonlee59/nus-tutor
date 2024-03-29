import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, EmojiEmotions, Image } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import Axios from "axios";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});




// trying to connect front and back end 
const Add = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");


  const createPost = () => {
    Axios.post("http://localhost:8000/post/add",
    {title}
    )
    setOpen(false);
    window.location = '/landingpage';
  }

//   //////  new added stuff  /////////
  
  // const handleSubmit = async (event) => {
  //   //Prevent page reload
  //   event.preventDefault();

  //   var { TITLE } = document.forms[0];
  //   const title = TITLE.value;
  //   try {
  //     const body = { title };
  //     const jsonObj = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     };
  //     const response = await fetch(
  //       "http://localhost:8000/post/add",
  //       jsonObj
  //     );
  //     const postData = await response.json();
  //     console.log(postData);
  //     // // Compare user info
  //     // if (postData.user) {
  //     //   setIsSubmitted(true);
  //     // } else {
  //     //   // Username not found
  //     //   setErrorMessages({ message: errors });
  //     // }
  //     window.location = "/landingpage";
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar sx={{ bgcolor: "red", width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              user1
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            onChange= {(event) => {setTitle(event.target.value);}}
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick = {createPost}>Post</Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
