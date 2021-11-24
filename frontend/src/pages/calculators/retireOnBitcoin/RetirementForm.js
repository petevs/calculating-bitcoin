import { Box } from '@mui/system'
import React from 'react'
import NumberFormat from 'react-number-format'
import { TextField, InputAdornment } from '@mui/material'
import FormBox from 'components/form/FormBox'

const RetirementForm = () => {
    return (
        <FormBox>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem'}}>
                <NumberFormat
                    label='Current Age'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 1000
                    }}
                />
                <NumberFormat
                    label='Retirement Age'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 1000
                    }}
                />
                <NumberFormat
                    label='Age of Death'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 1000
                    }}
                />
            </Box>
            <NumberFormat
                label='Current Bitcoin Holdings'
                customInput={TextField}
                inputProps={{type: 'numeric'}}
                InputProps={{
                    endAdornment: (<InputAdornment position='start'>
                        BTC
                    </InputAdornment>),
                }}
                decimalScale={8}
                fixedDecimalScale={8}
            />
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                <NumberFormat
                    label='Bitcoin Yearly Growth Rate'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    InputProps={{
                        endAdornment: (<InputAdornment position='start'>
                            %
                        </InputAdornment>),
                    }}
                    decimalScale={0}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 1000
                    }}
                />
                <NumberFormat
                    label='Annual Inflation Rate'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    InputProps={{
                        endAdornment: (<InputAdornment position='start'>
                            %
                        </InputAdornment>),
                    }}
                    decimalScale={0}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 100
                    }}
                />
            </Box>
            <NumberFormat
                label="Required Yearly Income (In Today's Dollars Before Tax)"
                customInput={TextField}
                inputProps={{type: 'numeric'}}
                InputProps={{
                    startAdornment: (<InputAdornment position='start'>
                        $
                    </InputAdornment>),
                }}
                thousandSeparator={true}
                
            />
        </FormBox>
    )
}

export default RetirementForm
