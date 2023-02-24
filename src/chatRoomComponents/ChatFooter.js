import {  AppBar, IconButton, TextField, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
//icons
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const ChatFooter = () => {
  return (
    
        <Toolbar 
      sx={{
        backgroundColor : "#3A98B9",
        height:"13vh",
        display : "flex",
        justifyContent: 'space-around',
        alignItems: 'center',
      }}    
    >
        <IconButton ><AttachFileSharpIcon className='footerbtn' fontSize='large'/></IconButton>
        <IconButton ><EmojiEmotionsIcon className='footerbtn' fontSize='large'/></IconButton>
        <TextField placeholder='Type your message here...'
            sx={{
                  width:"95%",
                  backgroundColor:"#dedede",
                  borderRadius:"25px",
                  outline:"none",
                  border:"none"
                  
                  
                }} />
        <IconButton ><SendRoundedIcon className='footerbtn' fontSize='large'/></IconButton>
    </Toolbar>
    
    

  )
}

export default ChatFooter