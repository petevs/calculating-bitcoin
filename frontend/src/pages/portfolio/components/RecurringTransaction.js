import { Box } from '@mui/system'
import React from 'react'
import NumberFormat from 'react-number-format'
import RecurringActions from './RecurringActions'


const RecurringTransaction = (props) => {

    const formatFrequency = (frequency) => {
        switch(frequency) {
            case 'weekly':
                return ' / week'
            case 'monthly':
                return ' / month'
            default:
                return ' / day'
        }
    }


    return (
            <Box sx={boxStyle}>
                <Box>
                    <Box>
                        <NumberFormat className="num" displayType='text' thousandSeparator={true} prefix='$' value={props.purchaseAmount} /> {formatFrequency(props.frequency)}
                    </Box>
                    <Box sx={{fontSize: '.675rem'}}>
                        From: {props.startDate} {props.useEndDate && ` to ${props.endDate}`}
                    </Box>
                    
                </Box>
                <RecurringActions {...props} />
            </Box>
    )
}

export default RecurringTransaction

const boxStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center'
}