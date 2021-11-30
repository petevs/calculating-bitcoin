
import NumberFormat from 'react-number-format'
import { Box } from '@mui/system'
import { TextField, InputAdornment, Typography, RadioGroup, FormControlLabel, Radio} from '@mui/material'
import { toggleCalculationMethod } from './retireOnBitcoinReducer'

const NowUntilRetirement = ({state, dispatch, updateValue}) => {
    return (
        <>
    <Box sx={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem'}}>
        <Typography sx={{fontSize: '1rem', fontWeight: '700'}}>
            Expectations {`(${state.currentYear} - ${state.yearOfRetirement()})`}
        </Typography>
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
                value={state.inflationUntilRetirement}
                onValueChange={(e) => dispatch(
                    updateValue({
                        name: 'inflationUntilRetirement', 
                        value: e.floatValue
                    })
                    )}
                size='small'
            />
            <RadioGroup 
                row sx={radioStyle}
                value={state.calculationMethod}
                onChange={(e) => dispatch(toggleCalculationMethod(e.target.value))}
            >
                <FormControlLabel value='priceTarget' control={<Radio />} label='Price Target' />
                <FormControlLabel value='growthRate' control={<Radio />} label='Annual Growth Rate' />
            </RadioGroup>
            {
                state.calculationMethod === 'growthRate' 
                ?
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
                    value={state.bitcoinGrowthRateUntilRetirement}
                    onValueChange={(e) => dispatch(
                        updateValue({
                            name: 'bitcoinGrowthRateUntilRetirement', 
                            value: e.floatValue
                        })
                        )}
                    size='small'
                />
                :
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
                        size='small'
                    />
        }
        </Box>
        </>
    )
}

export default NowUntilRetirement

const radioStyle = {
    '& .MuiSvgIcon-root': {
      fontSize: '1rem',
    },
    '& .MuiFormControlLabel-label': {
        fontSize: '.875rem'
    }
}