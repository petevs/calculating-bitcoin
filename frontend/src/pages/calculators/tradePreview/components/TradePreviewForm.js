import React from 'react'
import { TextField } from '@mui/material'
import NumberFormat from 'react-number-format'

const TradePreviewForm = () => {
    return (
        <>
           <NumberFormat
                customInput={TextField}
                label='Buy Price'
                thousandSeparator={true}
                // value={inputs.paymentAmount}
                // onValueChange={(e) => setInputs({
                //     ...inputs, 
                //     paymentAmount: e.floatValue
                // })}
            /> 
        </>
    )
}

export default TradePreviewForm
