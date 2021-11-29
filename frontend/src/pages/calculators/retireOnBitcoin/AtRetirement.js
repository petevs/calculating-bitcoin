import React from 'react'
import NumberFormat from 'react-number-format'
import { Box } from '@mui/system'
import { TextField, InputAdornment, Typography } from '@mui/material'

const AtRetirement = ({state, dispatch, updateValue}) => {
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', padding: '0 1rem'}}>
        <Typography sx={{fontSize: '1rem', fontWeight: '700'}}>
            Expecations {`(${state.yearOfRetirement()})`}
        </Typography>
        <NumberFormat
            label={`Estimated Bitcoin Price in ${state.yearOfRetirement()}`}
            customInput={TextField}
            inputProps={{type: 'numeric'}}
            InputProps={{
                startAdornment: (<InputAdornment position='start'>
                    $
                </InputAdornment>),
            }}
            decimalScale={0}
            thousandSeparator={true}
            isAllowed={(values) => {
                const {floatValue} = values
                return floatValue >= 0
            }}
            value={state.bitcoinPriceAtRetirement}
            onValueChange={(e) => dispatch(
                updateValue({
                    name: 'bitcoinPriceAtRetirement', 
                    value: e.floatValue
                })
                )}
        />
    </Box>
    )
}

export default AtRetirement
