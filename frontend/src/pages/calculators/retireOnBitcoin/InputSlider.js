import React from 'react'
import { Box } from '@mui/system'
import { TextField, Typography } from '@mui/material'
import NumberFormat from 'react-number-format'

const InputSlider = ({state, dispatch, updateValue}) => {
    return (
    <Box sx={wrapper}>
        <Box sx={card}>
            <Typography variant='h3' sx={title}>Current Age</Typography>
            <NumberFormat
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
        </Box>
        <Box sx={card}>
            <Typography variant='h3' sx={title}>Retirement Age</Typography>
            <NumberFormat
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
        </Box>
        <Box sx={card}>
            <Typography variant='h3' sx={title}>Age of Death</Typography>
            <NumberFormat
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
        </Box>
    </Box>
    )
}

export default InputSlider

const wrapper = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px,1fr))',
    gap: '1rem',

    '@media (max-width: 1024px)': {
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    }
}

const card = {
    display: 'grid',
    backgroundColor: 'rgb(33, 43, 54)',
    padding: '1rem',
    borderRadius: '6px',
    boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.05)',

    '& span': {
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: '600'
    }
}

const title = {
    fontSize: '.75rem',
    color: '#fff',
    fontWeight: '500',
    textTransform: 'uppercase',
    paddingBottom: '.5rem'
}