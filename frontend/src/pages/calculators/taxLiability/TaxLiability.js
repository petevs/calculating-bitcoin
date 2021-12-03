import Page from 'components/Page'
import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'
import { MenuItem, TextField } from '@mui/material'
import { useState } from 'react'

const TaxLiability = () => {

    const [type, setType] = useState('upTo')
    const [amount, setAmount] = useState(0)
    const [rate, setRate] = useState(0)


    return (
        <Page>
            <Box sx={{display: 'grid', gridAutoFlow: 'column', gap: '1rem'}}>
                <TextField 
                    select
                    size='small'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <MenuItem value='upTo'>Up To</MenuItem>
                    <MenuItem value='over'>Over</MenuItem>
                </TextField>
                <NumberFormat
                    label='Amount'
                    customInput={TextField}
                    thousandSeparator={true}
                    size='small'
                    prefix='$'
                    decimalScale={0}
                    value={amount}
                    onValueChange={(e) => setAmount(e.floatValue)}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0
                    }}
                />
                <NumberFormat
                    label='Tax Rate'
                    customInput={TextField}
                    suffix='%'
                    size='small'
                    decimalScale={0}
                    value={rate}
                    onValueChange={(e) => setAmount(e.floatValue)}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 100
                    }}
                />
            </Box>
        </Page>
    )
}

export default TaxLiability
