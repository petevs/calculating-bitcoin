import { Box } from '@mui/system'
import React from 'react'
import useHover from 'hooks/useHover'
import UpdateAvatarButton from './UpdateAvatarButton'
import { Avatar } from '@mui/material'
import useUserDetails from 'hooks/useUserDetails'

const UserAvatar = () => {


    const {hovering, enter, leave} = useHover()
    const { avatarURL } = useUserDetails()

    return (
        <>
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
                <UpdateAvatarButton hovering={hovering} />
            <Avatar 
                src={avatarURL}
                sx={{
                    width: '100%',
                    height: '100%',
                    '&MuiAvatar-root': {
                        zIndex: 1,
                    }
                }}
            />
        </Box>
        </>
    )
}

export default UserAvatar
