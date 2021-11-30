
import NumberFormat from 'react-number-format'
import { Box } from '@mui/system'
import { TextField, InputAdornment, Typography, RadioGroup, FormControlLabel, Radio} from '@mui/material'

const NowUntilRetirement = ({state, dispatch, updateValue}) => {
    return (
        <>
    <Box sx={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', padding: '1rem'}}>
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
            <RadioGroup sx={{fontSize: '.675rem'}}>
                <FormControlLabel value='priceTarget' control={<Radio />} label='Price Target'/>
                <FormControlLabel value='growthRate' control={<Radio />} label='Growth Rate' />
            </RadioGroup>
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
        </Box>
        </>
    )
}

export default NowUntilRetirement
