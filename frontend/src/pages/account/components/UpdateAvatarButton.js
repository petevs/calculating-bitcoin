import { Button } from '@mui/material'
import { Box } from '@mui/system'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import useFileUpload from 'hooks/useFileUpload';
import useFirebase from 'hooks/useFirebase';


const UpdateAvatarButton = ({hovering}) => {

    const { handleFileUploadOneStep } = useFileUpload()
    const { updateUserAccount } = useFirebase()

    // updateUserAccount('avatarURL', url)

    const updatePhoto = async (e) => {
       const url = await handleFileUploadOneStep(e, 'avatar')
       updateUserAccount('avatarURL', url)
    }


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
            backgroundColor: 'rgba(0,0,0,.85)',
            opacity: hovering ? 1 : 0,
            zIndex: 9999
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
                    id='file'
                    type='file'
                    onChange={updatePhoto}
                    hidden
                />
            </Button>
        </Box>
    )
}

export default UpdateAvatarButton
