import { Box } from '@mui/system'
import React from 'react'
import useHover from 'hooks/useHover'
import UpdateAvatarButton from './UpdateAvatarButton'
import { Typography } from '@mui/material'

const UserAvatar = () => {


    const {hovering, enter, leave} = useHover()

    return (
        <Box
            onMouseEnter={enter}
            onMouseLeave={leave}
            sx={{
                borderRadius: '50%',
                border: '1px dashed rgba(145, 158, 171, 0.32)',
                width: '144px',
                height: '144px',
                overflow: 'hidden',
                "& input[type='file']": {
                    appearance: 'none'
                },
                position: 'relative'
            }}
        >
                {
                    hovering &&
                    <UpdateAvatarButton />
                }
            <img
                alt='avatar' 
                src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2669&q=80"
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                }}
            />
        </Box>
    )
}

export default UserAvatar
