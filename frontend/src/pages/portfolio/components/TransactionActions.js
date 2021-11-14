import { IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
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
            <MoreHorizIcon />
        </IconButton>
        
        <MenuBox
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
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