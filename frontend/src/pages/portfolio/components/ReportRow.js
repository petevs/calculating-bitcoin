import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'

const ReportRow = (props) => {

    // switch(props.variant) {
    //     case('summary'):
    //         return {
    //             gridColumn:
    //         }
    //     default:



    
        return (
            <Box sx={row}>
                <Typography className={props.className} sx={style} variant='body-1'>{props.title}</Typography>
                <Typography variant='body-2' className={props.className} sx={typeStyle}>
                        <NumberFormat
                            displayType='text'
                            value={props.value}
                            decimalScale={2}
                            fixedDecimalScale={2}
                            thousandSeparator={true}
                            prefix='$'
                            {...props.numberFormat}
                        />
                    </Typography>
            </Box>
        )
    }

export default ReportRow

const row = {
    display: 'grid',
    gridColumn: '1 / span 1',
    gridTemplateColumns: 'repeat(10, 1fr)',
}

const style = {
    gridColumn: '1 / span 2', 
    paddingLeft: '2rem',
}

const typeStyle = {
    textAlign: 'right',
    gridColumn: '3 / span 1',
    '&.last': {
        borderBottom: '1px solid #fff',
        paddingBottom: '.5rem',
        marginBottom: '.25rem'
    },
    '&.subTotal': {
        gridColumn: '4 / span 1'
    }
}
