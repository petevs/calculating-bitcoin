import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const UpdateAvatarButton = () => {
    return (
        <Box sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            color: '#fff',
            display: 'grid',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: 'rgba(0,0,0,.85)'
        }}>
            <Button 
                component='label' 
                size='small'
                sx={{
                    fontSize: '.675rem'
                }}
                startIcon={<PhotoCamera />} 
            >
                Update Avatar
                <input
                    accept="image/*"
                    type='file'
                    hidden
                />
            </Button>
        </Box>
    )
}

export default UpdateAvatarButton
