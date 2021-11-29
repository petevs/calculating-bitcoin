import React from 'react'
import NumberFormat from 'react-number-format'
import { TextField, InputAdornment } from '@mui/material'

const AtRetirement = ({state, dispatch, updateValue}) => {
    return (
        <>
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
</>
    )
}

export default AtRetirement
