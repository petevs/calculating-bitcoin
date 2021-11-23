import { IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuBox from 'components/userMenu/components/MenuBox';
import useMenu from 'hooks/useMenu';
import { Box } from '@mui/system';
import EditRecurringTransaction from './EditRecurringTransaction';
import DeleteRecurringTransaction from './DeleteRecurringTransaction';

const RecurringActions = (props) => {
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
                <EditRecurringTransaction
                    {...props}
                />
                <DeleteRecurringTransaction
                    portfolioId={props.portfolioId}
                    transactionId={props.id}
                />
            </Box>
        </MenuBox>
        </>
    )
}

export default RecurringActions


const innerBox = {
    display: 'grid',
    gridAutoFlow: 'row',
}