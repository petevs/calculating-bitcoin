import { IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuBox from 'components/userMenu/components/MenuBox';
import useMenu from 'hooks/useMenu';
import EditTransaction from './EditTransaction';
import DeleteTransaction from './DeleteTransaction';
import { Box } from '@mui/system';

const TransactionActions = (props) => {

    const { anchorEl, open, handleClick, handleClose } = useMenu()

    return (
        <>
        <IconButton
            onClick={handleClick}
        >
            <MoreVertIcon />
        </IconButton>
        
        <MenuBox
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            style={{minWidth: '150px'}}
        >
            <Box sx={innerBox}>
                <EditTransaction 
                    {...props}
                />
                <DeleteTransaction 
                    portfolioId={props.portfolioId}
                    transactionId={props.id}
                />
            </Box>
        </MenuBox>
        </>
    )
}

export default TransactionActions

const innerBox = {
    display: 'grid',
    gridAutoFlow: 'row',
}