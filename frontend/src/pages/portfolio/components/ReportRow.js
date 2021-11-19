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

    const row = {
        display: 'grid',
        gridColumn: '1 / span 1',
        gridTemplateColumns: '1fr 125px 125px',
        gap: '.5rem',
        '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            fontSize: '.875rem'
        }
    }
    
    const style = {
        gridColumn: '1 / span 1', 
        paddingLeft: '1rem',
    }
    
    const typeStyle = {
        textAlign: 'right',
        gridColumn: '2 / span 1',
        '&.last': {
            borderBottom: '1px solid #fff',
            paddingBottom: '.5rem',
            marginBottom: '.25rem'
        },
        '&.subTotal': {
            gridColumn: '3 / span 1'
        }
    }

export default ReportRow

