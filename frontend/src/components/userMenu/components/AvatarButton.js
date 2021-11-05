import { useContext } from 'react'
import { IconButton, Avatar } from '@mui/material'
import GlobalContext from 'state/GlobalContext'

const AvatarButton = ({handleClick, src}) => {

    const { state } = useContext(GlobalContext)
    const { avatarURL } = state.user

    return (
        <IconButton onClick={handleClick}>
            <Avatar
                sx={{ width: 32, height: 32 }}
                src={src || avatarURL}
            />
        </IconButton>
    )
}


export default AvatarButton