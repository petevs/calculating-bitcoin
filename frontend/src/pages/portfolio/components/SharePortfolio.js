import { Button, FormControlLabel, Switch } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import useMenu from 'hooks/useMenu';
import useFirebase from 'hooks/useFirebase';
import { Box } from '@mui/system'
import MenuBox from 'components/userMenu/components/MenuBox';

const SharePortfolio = (props) => {

    const { anchorEl, open, handleClick, handleClose} = useMenu()
    const { toggleVisibility } = useFirebase()

    return (
        <>
                <Button
                    startIcon={<SendIcon />}
                    onClick={handleClick}
                    disabled={props.disabled}
                >
                    Share
                </Button>

                <MenuBox
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={{padding: '1rem'}}>
                        <FormControlLabel control={
                            <Switch 
                                checked={ props.visibility === 'public' ? true : false }
                                onChange={() => toggleVisibility(props.id, props.visibility)}
                            />
                            } 
                            label='Make Public' 
                        />
                    </Box>
                </MenuBox>
            
        </>
    )
}

export default SharePortfolio
