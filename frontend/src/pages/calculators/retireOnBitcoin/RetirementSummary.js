import React from 'react'
import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'
import Currency from 'components/Currency'
import Bitcoin from 'components/Bitcoin'

const RetirementSummary = ({state}) => {

    return (
        <Box sx={boxStyle}>
            Bitcoin Needed: <Bitcoin value={state.bitcoinRequired()} />
            <br />
            Portfolio Value Required: <Currency value={state.presentValueNow()} />
            <br />
            Portfolio Value Required: <Currency value={state.presentValueAtRetirement()} />
        </Box>
    )
}

export default RetirementSummary


const boxStyle = {
    backgroundColor: '#212B36',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    borderRadius: '1rem',
    padding: '1rem',
    color: '#fff',
}