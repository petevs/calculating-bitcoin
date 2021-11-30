import React from 'react'
import FormBox from 'components/form/FormBox'
import NumberFormat from 'react-number-format'
import FormHeader from 'components/form/FormHeader'
import { Box } from '@mui/system'
import { TextField, InputAdornment, Typography } from '@mui/material'

const RetirementGoals = ({state, dispatch, updateValue}) => {
    return (
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem'}}>
                <Typography sx={{fontSize: '1rem', fontWeight: '700'}}>Retirement Goals</Typography>
                <NumberFormat
                    label='Current Age'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 100
                    }}
                    value={state.currentAge}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'currentAge', 
                            value: e.floatValue
                        })
                        )}
                    size='small'
                />
                <NumberFormat
                    label='Retirement Age'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 1000
                    }}
                    value={state.retirementAge}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'retirementAge', 
                            value: e.floatValue
                        })
                        )}
                    size='small'
                />
                <NumberFormat
                    label='Age of Death'
                    customInput={TextField}
                    inputProps={{type: 'numeric'}}
                    isAllowed={(values) => {
                        const {floatValue} = values
                        return floatValue >= 0 && floatValue <= 1000
                    }}
                    value={state.ageOfDeath}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'ageOfDeath', 
                            value: e.floatValue
                        })
                        )}
                    size='small'
                />
            <NumberFormat
                label="Retirement Income (Today's Dollars)"
                customInput={TextField}
                inputProps={{type: 'numeric'}}
                InputProps={{
                    startAdornment: (<InputAdornment position='start'>
                        $
                    </InputAdornment>),
                }}
                thousandSeparator={true}
                value={state.requiredYearlyIncome}
                onValueChange={(e) => dispatch(
                    updateValue({
                        name: 'requiredYearlyIncome', 
                        value: e.floatValue
                    })
                    )}
                size='small'
            />
            </Box>
    )
}

export default RetirementGoals
