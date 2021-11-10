import { Button, FormControlLabel, Switch } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import useMenu from 'hooks/useMenu';
import MenuBox from 'components/userMenu/components/MenuBox';
import useFirebase from 'hooks/useFirebase';

const SharePortfolio = (props) => {

    const { anchorEl, open, handleClick, handleClose} = useMenu()
    const { toggleVisibility } = useFirebase()

    return (
        <>
                <Button
                    startIcon={<SendIcon />}
                    onClick={handleClick}
                >
                    Share
                </Button>

                <MenuBox
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                >
                        <FormControlLabel control={
                            <Switch 
                                checked={ props.visibility === 'public' ? true : false }
                                onChange={() => toggleVisibility(props.id, props.visibility)}
                            />
                            } 
                            label='Make Public' 
                        />
                </MenuBox>
            
        </>
    )
}

export default SharePortfolio
