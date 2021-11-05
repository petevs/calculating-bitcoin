import React from 'react'
import { IconButton, Avatar } from '@mui/material'

export const AvatarButton = ({handleClick, src}) => {
    return (
        <IconButton onClick={handleClick}>
            <Avatar
                sx={{ width: 32, height: 32 }}
                src={src || ''}
            />
        </IconButton>
    )
}
